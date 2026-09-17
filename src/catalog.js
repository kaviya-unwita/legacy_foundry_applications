const clean = (value = '') => value.replace(/^`|`$/g, '').trim()

// Screenshot catalogue (OCR). Supplies screenshots and purpose text. It is the field source only for
// screens whose legacy form is not available in SSA_MSS (sourceStatus === 'missing').
export function parseCatalogue(markdown) {
  const lines = markdown.split(/\r?\n/)
  const screens = []
  let screen = null
  let section = ''

  for (const line of lines) {
    const heading = line.match(/^### (LEG-\d{3})\s+(?:—|-)\s+(.+)$/)
    if (heading) {
      screen = {
        id: heading[1], title: heading[2].trim(), module: 'Other', subgroup: 'None',
        type: 'Application screen', purpose: '', screenshot: '', resolution: '',
        fields: [], actions: [], options: [],
      }
      screens.push(screen)
      section = ''
      continue
    }
    if (!screen) continue
    if (line.startsWith('## Cross-module')) break

    const meta = line.match(/^- \*\*(Module|Subgroup|Screen type|Purpose|Screenshot|Resolution):\*\*\s*(.*)$/)
    if (meta) {
      const keys = { Module: 'module', Subgroup: 'subgroup', 'Screen type': 'type', Purpose: 'purpose', Screenshot: 'screenshot', Resolution: 'resolution' }
      screen[keys[meta[1]]] = clean(meta[2])
      continue
    }
    if (line === '#### Visible labels and candidate field names') section = 'fields'
    else if (line === '#### Visible actions') section = 'actions'
    else if (line === '#### Visible submodules/menu options') section = 'options'
    else if (line.startsWith('#### ')) section = ''
    else if (section && line.startsWith('- ')) {
      const value = clean(line.slice(2))
      if (section === 'actions' && value.startsWith('No action label')) continue
      if (value && !screen[section].includes(value)) screen[section].push(value)
    }
  }

  const modules = [...new Set(screens.map((item) => item.module))]
  return { screens, modules }
}

export function screenshotUrl(path, basePath = '/legacy-screens') {
  return `${basePath}/${path.split('\\').map(encodeURIComponent).join('/')}`
}

const NON_FIELD_TEXT = /^(window\d*|mis|save|exit|back|clear|report|entry|master|list|history|delete)$/i
const SAMPLE_VALUE_TEXT = /private limited|castings india|gears\s*&\s*drives|agro implements|flow technology|heavy electricals|testing machine|\bgr[_ .-]?\d|\bclass\b.*\d|\bbody\b.*\d/i

// Only used for unverified screens (legacy form missing): filters obvious OCR noise from screenshot text.
export function isLikelyField(label) {
  const value = label.trim()
  if (!value || value.length > 72) return false
  if (/^\d+[,'/]|^\[|^window\d|^none$/i.test(value)) return false
  if (/@|^[\d\s()+./-]{7,}$|^[A-Z][A-Z0-9.]*_[A-Z0-9._]+$/.test(value)) return false
  if (/^[A-Z0-9]{10,}$/.test(value) && /\d/.test(value)) return false
  if (NON_FIELD_TEXT.test(value) || SAMPLE_VALUE_TEXT.test(value)) return false
  return true
}

const ACTION_PATTERNS = [
  ['save', /\b(save|update)\b/i],
  ['clear', /\b(clear|new|reset|cancel)\b/i],
  ['delete', /\bdelete\b/i],
  ['report', /\b(report|reports|print|preview|history)\b/i],
  ['exit', /\b(exit|back|close|quit)\b/i],
]

export function actionKind(label) {
  const hit = ACTION_PATTERNS.find(([, pattern]) => pattern.test(label))
  return hit ? hit[0] : 'other'
}

/**
 * Merge the source-verified legacy model (public/data/legacy_source.json) with the screenshot catalogue.
 * Menus come only from the live MENUMASTER tree in the source model, so there is a single menu resolver.
 */
export function buildModel(catalogue, source) {
  const ocr = Object.fromEntries(catalogue.screens.map((screen) => [screen.id, screen]))
  const screens = {}
  const legIndex = {}
  const menuShots = {}

  for (const item of source.screens) {
    const tabs = item.tabs.map((tab) => ({ ...tab, resolution: ocr[tab.legId]?.resolution ?? '', purpose: ocr[tab.legId]?.purpose ?? '' }))
    let fields = item.fields
    if (!fields) {
      // Legacy form not available: fall back to screenshot labels, unverified, plain text, never required.
      fields = item.legIds.flatMap((legId) => (ocr[legId]?.fields ?? []).filter(isLikelyField).map((label) => ({
        label, kind: 'field', type: 'text', maxLength: null, required: false, tab: legId, evidence: ['screenshot OCR only (unverified)'],
      })))
      fields = fields.filter((field, index) => fields.findIndex((other) => other.label === field.label) === index)
    }
    const buttons = item.sourceStatus === 'missing'
      ? [...new Set(item.legIds.flatMap((legId) => ocr[legId]?.actions ?? []))]
      : item.buttons
    screens[item.id] = { ...item, tabs, fields, buttons }
    for (const legId of item.legIds) legIndex[legId] = { kind: 'screen', screenId: item.id }
  }

  const walk = (options, module, path) => {
    for (const option of options) {
      if (option.menuLegId) legIndex[option.menuLegId] = { kind: 'menu', module, path: [...path, option.code] }
      if (option.children?.length) walk(option.children, module, [...path, option.code])
    }
  }
  for (const module of source.modules) {
    legIndex[module.menuLegId] = { kind: 'menu', module: module.module, path: [] }
    walk(module.options, module.module, [])
  }
  for (const legId of source.navigationLegIds) {
    if (!legIndex[legId]) legIndex[legId] = { kind: 'menu', module: ocr[legId]?.module ?? null, path: [] }
    if (ocr[legId]?.screenshot) menuShots[legId] = { id: legId, screenshot: ocr[legId].screenshot }
  }
  return { screens, modules: source.modules, legIndex, menuShots, screenshotBase: '/legacy-screens' }
}

// Veeyes ERP: main-screen modules and submodules as recorded in the Veeyes discovery workbook.
export const VEEYES_HIERARCHY = {
  'Foundry Application': ['Masters', 'Marketing Management', 'Order Processing', 'Production Planning', 'Quality Information', 'lab', 'Sales Information', 'Pattern', 'Subcontract', 'On Screen Queries', 'Enquiries', 'Heat History', 'System', 'Utilities', 'Export', 'Methods', 'Radiography - Foundry', 'Temporary Update screens'],
  'Inventory Management': ['Masters', 'Purchase', 'Goods Receipt', 'Issues', 'General', 'Reports'],
  'Customer Complaints': ['Entries & Reports'],
  Calibration: ['Entries & Reports'],
  Maintenance: ['Entries & Reports'],
  'Financial Accounts': ['Masters', 'Vouchers', 'Ledgers', 'Postings', 'Reports', 'Ratio & Interest calc', 'Utility'],
  Radiography: ['RT Masters', 'MIS Reports', 'Inventory stores', 'Radiography', 'System'],
  NABL: ['Masters', 'Lab'],
}

function veeyesFieldType(controlType = '') {
  const value = controlType.toLowerCase()
  if (value.includes('checkbox')) return 'checkbox'
  if (value.includes('date')) return 'date'
  if (value === 'numeric' || value.includes('numeric')) return 'number'
  return 'text'
}

/**
 * Veeyes screens come from screenshots and the Veeyes discovery workbook only (no compiled legacy source here),
 * so they are rendered as unverified: workbook control types, no required markers unless the workbook says so,
 * no F9 data. Captures with the same title are pages of one screen.
 */
export function buildVeeyesModel(items) {
  const usable = items.filter((item) => !item.consolidatedInto && item.module !== 'Main Screen')
  const groups = new Map()
  for (const item of usable) {
    const key = `${item.module}|${item.submodule}|${item.title}`
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(item)
  }

  const screens = {}
  for (const members of groups.values()) {
    const first = members[0]
    const supplied = members.some((item) => item.availability !== 'not-supplied')
    const fields = members.flatMap((item) => {
      const metadata = item.fieldMetadata?.length ? item.fieldMetadata : item.fields.map((name) => ({ name, section: null, controlType: '', mandatory: 'Unknown' }))
      const sections = new Set(metadata.map((field) => field.section).filter(Boolean))
      const rows = []
      let section = null
      for (const field of metadata) {
        if (sections.size > 1 && field.section && field.section !== section) {
          section = field.section
          rows.push({ label: section, kind: 'heading', tab: item.id, evidence: ['Veeyes discovery workbook'] })
        }
        const required = String(field.mandatory).toLowerCase() === 'yes'
        rows.push({
          label: field.name, kind: 'field', type: veeyesFieldType(field.controlType), maxLength: null, required,
          requiredEvidence: required ? 'Veeyes discovery workbook: mandatory' : null, controlType: field.controlType || null,
          tab: item.id, evidence: [item.fieldMetadata?.length ? `Veeyes discovery workbook (${field.controlType || 'type not recorded'})` : 'screenshot OCR only (unverified)'],
        })
      }
      return rows
    })
    screens[first.id] = {
      id: first.id, legIds: members.map((item) => item.id), module: first.module, submodule: first.submodule,
      menuCode: first.id, menuLabel: first.title, formName: null, formFile: null,
      sourceStatus: supplied ? 'workbook' : 'not-supplied', storageKey: `veeyes:${first.id}`,
      tabs: members.map((item, index) => ({
        legId: item.id, title: members.length > 1 ? `${item.title} (${index + 1})` : item.title, purpose: item.purpose ?? '', resolution: '',
        screenshots: item.screenshots?.length ? item.screenshots : item.screenshot ? [item.screenshot] : [],
      })),
      fields, otherLegacyText: [], buttons: [...new Set(members.flatMap((item) => item.actions))], lovs: [], reports: [],
      writesData: /entry|master/i.test(first.type), writeTables: [], readTables: [], deletes: [], controlCodes: [], formatCodes: [],
    }
  }

  const byMenu = (module, submodule) => Object.values(screens).filter((screen) => screen.module === module && screen.submodule === submodule)
  const modules = Object.entries(VEEYES_HIERARCHY).map(([module, submodules]) => ({
    module, menuLegId: 'VEY-075',
    options: submodules.map((submodule, index) => ({
      code: `${module}/${index}`, label: submodule, formName: null, screenId: null, menuLegId: null,
      unavailableNote: 'No screens supplied',
      children: byMenu(module, submodule).map((screen) => ({
        code: screen.id, label: screen.menuLabel, formName: null, screenId: screen.id, children: [], menuLegId: null,
      })),
    })),
  }))
  const main = items.find((item) => item.module === 'Main Screen')
  const menuShots = main?.screenshot ? { [main.id]: { id: main.id, screenshot: main.screenshot } } : {}
  return { screens, modules, legIndex: {}, menuShots, screenshotBase: '/veeyes-screens' }
}

export function findMenuLevel(module, path) {
  let options = module.options
  let node = null
  for (const code of path) {
    node = options.find((option) => option.code === code)
    if (!node) return { options: module.options, node: null }
    options = node.children
  }
  return { options, node }
}

export function flattenMenu(options, trail = []) {
  return options.flatMap((option) => [{ option, trail }, ...flattenMenu(option.children ?? [], [...trail, option.code])])
}
