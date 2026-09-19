import { useEffect, useMemo, useState } from 'react'
import {
  Activity, ArrowLeft, BarChart3, BookOpen, Boxes, Check, ChevronRight, ClipboardList, Database,
  Factory, FileText, FolderOpen, Gauge, Hash, Home, Image, Info, LayoutGrid, Lock, Menu, Package,
  PanelLeftClose, PanelLeftOpen, Printer, RotateCcw, Save, Search, Settings, ShieldCheck, Tag, Trash2,
  TriangleAlert, Users, Wrench, X,
} from 'lucide-react'
import { actionKind, buildModel, buildYesModel, findMenuLevel, flattenMenu, parseCatalogue, screenshotUrl } from './catalog'
import { parseLocation, toPath } from './routes'
import PhoenixApp from './PhoenixApp'

const ICONS = [Factory, Users, ClipboardList, Gauge, Activity, LayoutGrid, Wrench, BarChart3, Package, FileText, Boxes, ShieldCheck, Database, Settings]

// Main-screen button names as shown in the legacy gateway screenshot (LEG-060).
const LEGACY_MODULES = [
  ['Customer Master', 'CUSTOMER'], ['Product Master', 'PRODUCT'], ['Marketing Master', 'MARKETING'], ['Order Master', 'ORDERS'],
  ['Production Master', 'PRODUCTION'], ['Lab Master', 'LAB'], ['Subcontract Master', 'SUBCONTRACT'], ['Quality Master', 'QUALITY'],
  ['Sales Mater', 'SALES'], ['Onscreen Master', 'ON SCREEN'], ['Enquiry Master', 'ENQUIRY'], ['Heat Status Master', 'HEAT STATUS'],
  ['System Master', 'SYSTEM'], ['Stores Master', 'STORES'], ['Maintanence', 'MAINTENANCE'], ['Calibration', 'CALIBRATION'],
]
const MODULE_LABELS = Object.fromEntries(LEGACY_MODULES)
const moduleLabel = (module) => MODULE_LABELS[module] || String(module)
const APPLICATIONS = { sun: 'SUN’s Foundry', yes: 'YES’s Foundry', phoenix: 'Phoenix ERP' }
// Screens verified against compiled legacy source; everything else is screenshot/workbook evidence only.
const VERIFIED_STATUSES = ['present', 'fallback']
const readStore = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback } }
const writeStore = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)) } catch { /* storage unavailable */ } }
const removeStore = (key) => { try { localStorage.removeItem(key) } catch { /* storage unavailable */ } }

function useLegacyModel(application) {
  const [state, setState] = useState({ model: null, error: '' })
  useEffect(() => {
    let cancelled = false
    setState({ model: null, error: '' })
    const load = (url, kind) => fetch(url).then((response) => {
      if (!response.ok) throw new Error(`${url} could not be loaded (${response.status})`)
      return kind === 'json' ? response.json() : response.text()
    })
    const request = application === 'phoenix'
      ? Promise.resolve({ kind: 'phoenix', modules: [], screens: {}, legIndex: {} })
      : application === 'yes'
      ? load('/data/yes-screens.json', 'json').then((items) => ({ ...buildYesModel(items), kind: 'yes' }))
      : Promise.all([load('/data/SUN_Foundry_Legacy_Application_Screen_Catalog.md', 'text'), load('/data/legacy_source.json', 'json')])
        .then(([markdown, source]) => ({ ...buildModel(parseCatalogue(markdown), source), kind: 'sun' }))
    request
      .then((model) => { if (!cancelled) setState({ model, error: '' }) })
      .catch((reason) => { if (!cancelled) setState({ model: null, error: reason.message }) })
    return () => { cancelled = true }
  }, [application])
  return state
}

// Where a SUN's field comes from (set per field in legacy_source.json).
const FIELD_SOURCES = {
  'form+screenshot': ['Form + screenshot', 'In the legacy form, and its label is visible in the screenshot of this page'],
  form: ['Legacy form', 'In the legacy form file; its label was not matched in a supplied screenshot of this page'],
  screenshot: ['Screenshot only', 'Visible in the screenshot; no matching item in the legacy form file'],
  'screenshot-hidden': ['Screenshot · hidden in form', 'Visible in the screenshot; the legacy form file has this item but hides it'],
  'form-text': ['Form label only', 'A text in the legacy form that names a table column, with no input item behind it'],
}

// A field's source as a tag ("Form + screenshot"), or, in the compact view, as a coloured dot with the text on hover.
function SourceTag({ source, compact = false }) {
  const [text, description] = FIELD_SOURCES[source] ?? []
  if (!text) return null
  const kind = `source-${source.replace('+', '-')}`
  return compact
    ? <i className={`source-dot ${kind}`} title={`${text}: ${description}`} aria-label={text}/>
    : <em className={`source-tag ${kind}`} title={description}>{text}</em>
}

function Field({ field, valueKey, value, onChange, onLookup, lookupAvailable, showSource = true }) {
  const id = `field-${valueKey}`
  const type = ['date', 'number', 'password', 'checkbox', 'select'].includes(field.type) ? field.type : 'text'
  const step = type === 'number' ? (field.scale ? String(10 ** -field.scale) : '1') : undefined
  const hint = [
    FIELD_SOURCES[field.source] && `Source: ${FIELD_SOURCES[field.source][1]}`,
    field.item && `Legacy item ${field.block ? `${field.block}.` : ''}${field.item}${field.databaseItem ? ' (database item)' : ''}${field.canvas ? ` on canvas ${field.canvas}` : ''}`,
    field.column && `${field.column} ${field.columnType ?? ''}`.trim(),
    field.formatMask && `Format mask ${field.formatMask}`,
    field.requiredEvidence && `Required: ${field.requiredEvidence}`,
    ...(field.validationMessages ?? []).map((message) => `Legacy message: ${message}`),
    `Evidence: ${(field.evidence ?? []).join('; ')}`,
  ].filter(Boolean).join('\n')
  return (
    <label className={field.labelSide ? `field side-${field.labelSide}` : 'field'} htmlFor={id} title={hint}>
      <span>{!showSource && <SourceTag source={field.source} compact/>}{field.label}{field.required && <b className="required"> *</b>}{showSource && <SourceTag source={field.source}/>}</span>
      <div className="input-wrap">
        {type === 'checkbox'
          ? <input id={id} type="checkbox" className="checkbox" checked={value === 'Y'} onChange={(event) => onChange(valueKey, event.target.checked ? 'Y' : '')} />
          : type === 'select'
          ? <select id={id} value={value ?? ''} required={field.required} onChange={(event) => onChange(valueKey, event.target.value)}><option value="">—</option>{field.options.map((option) => <option key={option} value={option}>{option}</option>)}</select>
          : <input id={id} type={type} step={step} value={value ?? ''} required={field.required} maxLength={field.maxLength ?? undefined}
          onChange={(event) => onChange(valueKey, event.target.value)}
          onKeyDown={(event) => { if (event.key === 'F9' && lookupAvailable) { event.preventDefault(); onLookup(field.label) } }} />}
        {type === 'text' && lookupAvailable && <button type="button" className="lookup" title="Legacy list of values (F9)" onClick={() => onLookup(field.label)}>F9</button>}
      </div>
    </label>
  )
}

function LookupModal({ field, lovs, onClose }) {
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section className="modal" onMouseDown={(event) => event.stopPropagation()}>
        <header><div><small>F9 · LEGACY LISTS OF VALUES IN THIS FORM</small><h3>{field}</h3></div><button onClick={onClose} aria-label="Close"><X size={20}/></button></header>
        <p className="modal-note">These are the list definitions compiled into the legacy form. No database is connected, so no rows are shown. The compiled form does not record which item each list is attached to.</p>
        <div className="lov-list">{lovs.map((lov, index) => (
          <article key={index}>
            <strong>{lov.table}</strong>
            <small>Columns: {lov.columns.join(', ')}{lov.dynamic ? ' · built dynamically in a trigger' : ''}</small>
            <code>{lov.sql}</code>
          </article>
        ))}</div>
      </section>
    </div>
  )
}

function HomePage({ model, modules, onOpenModule, onOpenScreen }) {
  const screens = Object.values(model.screens)
  const fieldCount = screens.reduce((total, screen) => total + screen.fields.filter((field) => field.kind === 'field').length, 0)
  const isYes = model.kind === 'yes'
  const unverified = screens.filter((screen) => screen.sourceStatus !== 'present').length
  const screenshots = screens.reduce((total, screen) => total + screen.legIds.length, 0)
  return (
    <main className="content dashboard">
      <section className="hero">
        {isYes
          ? <div><span className="eyebrow">YES’S FOUNDRY · LEGACY ERP</span><h1>YES’s Foundry replica</h1><p>Screens follow the supplied YES’s screenshots and discovery workbook. They are not yet verified against the YES’s legacy source.</p></div>
          : <div><span className="eyebrow">SUN’S FOUNDRY · FOUNDRY OPERATIONS</span><h1>Foundry legacy replica</h1><p>Menus, screens and fields follow the legacy Oracle Forms application and its live menu table.</p></div>}
        <div className="hero-mark"><Factory/><span>FOUNDRY<br/>CONTROL</span></div>
      </section>
      <section className="stats">
        <article><span className="stat-icon teal"><LayoutGrid/></span><div><strong>{screens.length}</strong><p>{isYes ? 'Documented screens' : 'Legacy forms'} ({screenshots} {isYes ? 'entries' : 'screenshots'})</p></div></article>
        <article><span className="stat-icon gold"><Database/></span><div><strong>{fieldCount.toLocaleString()}</strong><p>{isYes ? 'Workbook / screenshot fields' : 'Source-backed fields'}</p></div></article>
        <article><span className="stat-icon blue"><FileText/></span><div><strong>{isYes ? screens.filter((screen) => screen.sourceStatus === 'not-supplied').length : screens.filter((screen) => screen.reports.length).length}</strong><p>{isYes ? 'Screens without screenshots' : 'Forms with legacy reports'}</p></div></article>
        <article><span className="stat-icon green"><TriangleAlert/></span><div><strong>{unverified}</strong><p>{isYes ? 'Not verified against source' : 'Forms not fully verified'}</p></div></article>
      </section>
      <div className="section-title"><div><span>OPERATIONS</span><h2>Application modules</h2></div><small>{modules.length} MODULES</small></div>
      <section className="module-grid">
        {modules.map((module, index) => {
          const Icon = ICONS[index % ICONS.length]
          const count = screens.filter((screen) => screen.module === module.module).length
          return <button className="module-card" key={module.module} onClick={() => onOpenModule(module.module)}><span className="module-icon"><Icon/></span><div><h3>{moduleLabel(module.module)}</h3><p>{count} {isYes ? 'documented screens' : 'legacy forms'}</p></div><ChevronRight/></button>
        })}
      </section>
      <section className="recent-panel"><div className="section-title"><div><span>QUICK ACCESS</span><h2>Entry screens</h2></div></div><div className="recent-list">{screens.filter((screen) => screen.writesData && ['present', 'workbook'].includes(screen.sourceStatus)).slice(0, 6).map((screen) => <button key={screen.id} onClick={() => onOpenScreen(screen.id)}><span>{screen.formName ?? screen.id}</span><strong>{screen.menuLabel}</strong><small>{moduleLabel(screen.module)}</small><ChevronRight size={17}/></button>)}</div></section>
    </main>
  )
}

export function MenuPage({ module, path, model, onOpenScreen, onOpenPath, onBack }) {
  const { options, node } = findMenuLevel(module, path)
  const [showLegacy, setShowLegacy] = useState(false)
  const menuLegId = node ? node.menuLegId : module.menuLegId
  const legacyShot = menuLegId ? model.menuShots[menuLegId] : null
  return (
    <main className="content">
      <div className="screen-toolbar">
        <button className="back-link" onClick={path.length ? () => onOpenPath(path.slice(0, -1)) : onBack}><ArrowLeft size={17}/> {path.length ? moduleLabel(module.module) : 'Dashboard'}</button>
        {legacyShot && <div><button className={showLegacy ? 'tool active' : 'tool'} onClick={() => setShowLegacy(!showLegacy)}><Image size={17}/> Legacy reference</button></div>}
      </div>
      <div className="page-heading"><div><span className="eyebrow">{model.kind === 'yes' ? 'YES’S MENU · DISCOVERY WORKBOOK' : 'LEGACY MENU · MENUMASTER'}</span><h1>{node ? node.label : moduleLabel(module.module)}</h1><p>{model.kind === 'yes' ? 'Modules and submodules come from the YES’s main screen and discovery workbook.' : 'Options, order and labels come from the live legacy menu table.'}</p></div><div className="count-badge">{options.length}<small>OPTIONS</small></div></div>
      {showLegacy && legacyShot && <section className="legacy-reference"><div className="panel-title"><div><span>SOURCE EVIDENCE</span><h3>Legacy menu screenshot</h3></div><small>{legacyShot.id}</small></div><img src={screenshotUrl(legacyShot.screenshot, model.screenshotBase)} alt="Legacy menu" /></section>}
      <section className="option-grid">{options.map((option, index) => {
        const isMenu = option.children?.length > 0
        const screen = option.screenId ? model.screens[option.screenId] : null
        const disabled = !isMenu && !screen
        // An option is disabled for one of two reasons, and each says which:
        //  - the legacy menu group has no options at all (unavailableNote from the source data,
        //    e.g. "No options in the legacy menu" for MAINTANANCE VIEWS);
        //  - the option exists in the legacy menu but no screenshot of its screen was supplied.
        const reason = option.unavailableNote ?? (option.formName
          ? `No screenshot was captured for this option (legacy form ${option.formName} ${option.formInSource ? 'is in the legacy source' : 'is not in the legacy source'})`
          : 'No screenshot was captured for this option')
        return (
          <button key={option.code} disabled={disabled} title={disabled ? reason : option.formName ?? option.label}
            onClick={() => (isMenu ? onOpenPath([...path, option.code]) : onOpenScreen(option.screenId))}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{option.label}{disabled && <small className="option-note">{option.unavailableNote ?? `Not captured · ${option.formName ?? 'no form'}`}</small>}</strong>
            {isMenu ? <FolderOpen size={18}/> : <ChevronRight size={19}/>}
          </button>
        )
      })}</section>
    </main>
  )
}

const tabKey = (tab) => tab.key ?? tab.legId

// Legacy reading order of a page's sections: top to bottom; sections side by side on the legacy screen are read
// left to right, and sections stacked in one legacy column are read before the next column.
function orderSections(sections) {
  const bands = []
  for (const section of [...sections].sort((a, b) => (a.unplaced - b.unplaced) || (a.group - b.group) || (a.y - b.y) || (a.x - b.x))) {
    const band = bands.at(-1)
    if (band && !section.unplaced && !band.unplaced && band.group === section.group && section.y < band.bottom - 4) {
      band.bottom = Math.max(band.bottom, section.y + section.h)
      const column = band.columns.find((item) => section.x < item.right - 4 && section.x + section.w > item.x + 4)
      if (column) {
        column.sections.push(section)
        column.x = Math.min(column.x, section.x)
        column.right = Math.max(column.right, section.x + section.w)
      } else band.columns.push({ x: section.x, right: section.x + section.w, sections: [section] })
    } else {
      bands.push({ group: section.group, unplaced: Boolean(section.unplaced), bottom: section.y + section.h, columns: [{ x: section.x, right: section.x + section.w, sections: [section] }] })
    }
  }
  return bands.flatMap((band) => band.columns.sort((a, b) => a.x - b.x).flatMap((column) => column.sections))
}

// Legacy reading order inside a section: a form with two or more tall legacy columns (Customer, Company) is read down
// each column; anything else (a row of check boxes, a MIN/MAX matrix, a single column) is read across each row.
function orderFields(members) {
  const rowsPerColumn = {}
  for (const field of members) (rowsPerColumn[field.col] ??= new Set()).add(field.row)
  const byColumn = Object.values(rowsPerColumn).filter((rows) => rows.size >= 3).length >= 2
  return [...members].sort((a, b) => (byColumn ? (a.col - b.col) || (a.row - b.row) : (a.row - b.row) || (a.col - b.col)) || ((a.x ?? 0) - (b.x ?? 0)))
}

// A page as the legacy form divides it: one card per legacy section, in legacy reading order, with the fields in
// legacy order in a plain, readable grid.
function SectionedForm({ sections, fields, renderField }) {
  return (
    <div className="form-sections">{orderSections(sections).map((section) => {
      const members = orderFields(fields.filter((field) => field.section === section.id))
      if (!members.length) return null
      return (
        <section key={section.id} className={section.unplaced ? 'form-section unplaced' : 'form-section'}>
          {section.title && <h4>{section.title}</h4>}
          <div className="form-grid">{members.map((field, index) => (
            <div key={`${field.label}-${index}`} className={field.width >= 300 && field.type !== 'checkbox' ? 'form-cell wide' : 'form-cell'}>{renderField(field, index)}</div>
          ))}</div>
        </section>
      )
    })}</div>
  )
}

// Says where a page of a SUN's screen comes from: a screenshot, the legacy form only, or neither.
function pageSource(screen, tab, fieldCount) {
  const form = screen.formFile ?? `${screen.formName}.fmx`
  const where = tab.formTab ? `tab page ${tab.formTab}` : tab.formCanvas ? `canvas ${tab.formCanvas}` : ''
  const notes = []
  if (tab.source === 'screenshot') {
    const shots = (tab.legIds?.length ? tab.legIds : [tab.legId]).join(', ')
    notes.push(screen.sourceStatus === 'missing'
      ? `From screenshot ${shots}. The legacy form ${screen.formName} is not in the legacy files, so these labels are screenshot text only.`
      : `From screenshot ${shots}; fields from ${where ? `${where} of ` : ''}the legacy form ${form}.`)
  } else {
    notes.push(`No screenshot supplied for this ${tab.formTab ? 'tab' : tab.formCanvas ? 'canvas' : 'screen'}. Fields come from the legacy form ${form}${where ? ` (${where})` : ''} only.`)
  }
  if (tab.formCanvas) notes.push('This is a separate canvas of the form (a pop-up or stacked view) that the screenshot does not show.')
  if (tab.inScreenshotTabStrip === false) notes.push('This tab page is in the legacy form file but not in the tab strip of the supplied screenshots, so it may be hidden or removed in the live system.')
  if (!fieldCount) notes.push(screen.sourceStatus === 'missing' ? 'No field labels could be read from the screenshot.' : 'The legacy form file has no fields on this page.')
  return notes
}

export function ScreenPage({ screen, screenshotBase = '/legacy-screens', onBack }) {
  const storageKey = `sun-foundry:form:${screen.storageKey}`
  const [values, setValues] = useState(() => readStore(storageKey, {}))
  const [notice, setNotice] = useState('')
  const [lookup, setLookup] = useState('')
  const [showLegacy, setShowLegacy] = useState(false)
  // Field sources: a coloured dot per field by default (hover for the text); the full tags on demand
  const [showSources, setShowSources] = useState(() => readStore('sun-foundry:show-sources', false))
  const toggleSources = () => setShowSources((current) => { writeStore('sun-foundry:show-sources', !current); return !current })
  const [activeTab, setActiveTab] = useState(tabKey(screen.tabs[0]))
  // Pages are the legacy tab pages (in legacy order), uncaptured canvases, or the screenshots of a form without tabs.
  const paged = screen.tabs.length > 1 || Boolean(screen.tabs[0]?.formTab)
  const tabKeys = new Set(screen.tabs.map(tabKey))
  const outsideTabs = paged ? screen.fields.filter((field) => !tabKeys.has(field.tab)) : []
  const visibleFields = paged ? screen.fields.filter((field) => field.tab === activeTab) : screen.fields
  const tab = screen.tabs.find((item) => tabKey(item) === activeTab) ?? screen.tabs[0]
  const pageNotes = tab.source ? pageSource(screen, tab, visibleFields.length) : []
  // One value per field: fields that share a label on a page (e.g. two "Remarks") must not share a value.
  const valueKey = (field) => field.item
    ? `${field.tab ?? ''}|${field.block ?? ''}.${field.item}`
    : `${field.tab ?? ''}|${field.section ?? ''}|${field.row ?? ''}|${field.col ?? ''}|${field.label}`
  const verified = VERIFIED_STATUSES.includes(screen.sourceStatus)
  const isYes = screen.storageKey.startsWith('yes:')
  const canSave = screen.writesData || !verified
  const readOnly = verified && !screen.writesData
  const docCode = screen.controlCodes[0]

  const notify = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 4200) }
  const update = (key, value) => setValues((current) => ({ ...current, [key]: value }))
  const act = (label) => {
    const kind = actionKind(label)
    if (kind === 'exit') return onBack()
    if (kind === 'clear') { setValues({}); return notify('Form cleared') }
    if (kind === 'save') {
      if (!canSave) return notify('This legacy form does not write data')
      const next = { ...values }
      const numbered = docCode && !next.__documentNo
      if (numbered) {
        const counterKey = `sun-foundry:control:${docCode}`
        const last = Number(readStore(counterKey, 0)) + 1
        writeStore(counterKey, last)
        next.__documentNo = String(last).padStart(4, '0')
      }
      setValues(next)
      writeStore(storageKey, next)
      return notify(numbered ? `Saved locally · document no. ${next.__documentNo} (legacy CONTROL code ${docCode})` : 'Saved locally (no database connected)')
    }
    if (kind === 'delete') {
      removeStore(storageKey)
      setValues({})
      const keys = screen.deletes.map((item) => `${item.table} by ${item.keys.join(', ') || 'company/unit'}`).join('; ')
      return notify(`Local draft deleted. The legacy form deletes the record from ${keys || 'its tables'}.`)
    }
    if (kind === 'report') {
      const reports = screen.reports.map((report) => report.name).join(', ')
      return notify(reports ? `Legacy report(s): ${reports}. Oracle Reports are not connected in this replica.` : `'${label}' runs a legacy report that is not connected in this replica.`)
    }
    return notify(`'${label}' is a legacy action that is not implemented in this replica.`)
  }
  const buttons = screen.sourceStatus === 'not-supplied' ? ['Exit'] : screen.buttons.length ? screen.buttons : (canSave ? ['Save', 'Clear', 'Exit'] : ['Exit'])
  const shots = tab.screenshots ?? (tab.screenshot ? [tab.screenshot] : [])
  const actionIcon = (label) => ({ save: <Save/>, clear: <RotateCcw/>, delete: <Trash2/>, report: <Printer/>, exit: <ArrowLeft/> }[actionKind(label)] ?? <Info/>)

  return (
    <main className="content screen-page">
      {notice && <div className="toast" role="status"><Check size={17}/>{notice}</div>}
      <div className="screen-toolbar"><button className="back-link" onClick={onBack}><ArrowLeft size={17}/> {moduleLabel(screen.module)}</button><div>{!isYes && <button className={showSources ? 'tool active' : 'tool'} onClick={toggleSources} title="Show where each field comes from as a tag"><Tag size={17}/> Field sources</button>}<button className={showLegacy ? 'tool active' : 'tool'} onClick={() => setShowLegacy(!showLegacy)}><Image size={17}/> Legacy reference</button></div></div>
      <header className="form-heading">
        <div>
          <div className="form-meta">{isYes ? <small>{screen.submodule ?? 'YES’s'}</small> : <><small>{screen.formName}{screen.formFile ? ` · ${screen.formFile}` : ''}</small><small>Menu {screen.menuCode}</small></>}<small>{screen.legIds.length ? screen.legIds.join(', ') : 'No screenshot'}</small></div>
          <h1>{screen.menuLabel}</h1>
          <p>{readOnly ? 'The legacy form is read-only (it writes no tables).' : screen.writeTables.length ? `Legacy writes: ${screen.writeTables.join(', ')}` : tab.purpose}</p>
        </div>
        <span className="module-tag">{moduleLabel(screen.module)}</span>
      </header>

      {screen.sourceStatus === 'fallback' && <div className="banner warn"><TriangleAlert size={17}/><div><strong>Based on another copy of the legacy form.</strong> {screen.sourceNote ?? <>The live menu runs <code>{screen.formName}</code>, which is not in SUN legacy source. Fields come from <code>{screen.formFile}</code> and must be confirmed on the live system.</>}</div></div>}
      {screen.noScreenshot && <div className="banner info"><Info size={17}/><div><strong>No screenshot supplied.</strong> This option is in the legacy menu and its form <code>{screen.formFile}</code> is in the legacy files, so every tab and field here comes from the legacy form only. Confirm it on the live system.</div></div>}
      {screen.sourceStatus === 'workbook' && <div className="banner warn"><TriangleAlert size={17}/><div><strong>Not verified against the YES’s legacy source.</strong> Fields and control types come from the supplied screenshots and the YES’s discovery workbook. Mandatory rules, lookups and table mappings are not confirmed.</div></div>}
      {screen.sourceStatus === 'not-supplied' && <div className="banner danger"><TriangleAlert size={17}/><div><strong>Screenshot not supplied.</strong> This screen is listed in the YES’s discovery workbook, but no screen evidence was provided, so no fields are shown.</div></div>}
      {screen.sourceStatus === 'missing' && <div className="banner danger"><TriangleAlert size={17}/><div><strong>Unverified screen.</strong> {screen.sourceNote ?? <>The legacy form <code>{screen.formName}</code> is not in SUN legacy source.</>} These fields are screenshot text only; their types and required rules are unknown.</div></div>}

      {showLegacy && <section className="legacy-reference"><div className="panel-title"><div><span>SOURCE EVIDENCE</span><h3>Legacy screenshot · {tab.title}</h3></div><small>{tab.resolution}</small></div>{shots.length ? <div className="reference-grid">{shots.map((shot) => <img key={shot} src={screenshotUrl(shot, screenshotBase)} alt={`Legacy ${tab.title}`} />)}</div> : <p>No screenshot was supplied for this {paged ? 'page' : 'screen'}.{tab.source === 'form' && ` Its fields come from the legacy form ${screen.formFile} only.`}</p>}</section>}

      {outsideTabs.length > 0 && <section className="form-panel">
        <div className="panel-title"><div><span>OUTSIDE THE TAB PAGES</span><h3>Shown with every tab</h3></div><small>{outsideTabs.length} FIELDS</small></div>
        <div className="form-grid">{outsideTabs.map((field, index) => <Field key={`${valueKey(field)}-${index}`} field={field} valueKey={valueKey(field)} value={values[valueKey(field)]} onChange={update} onLookup={setLookup} lookupAvailable={screen.lovs.length > 0} showSource={showSources || isYes}/>)}</div>
      </section>}

      {paged && <nav className="form-tabs" aria-label="Legacy form pages">{screen.tabs.map((item) => <button key={tabKey(item)} className={[tabKey(item) === activeTab && 'active', item.formTab && 'legacy-tab', item.source === 'form' && 'form-only'].filter(Boolean).join(' ')} title={item.source === 'screenshot' ? 'From a screenshot' : item.source === 'form' ? 'No screenshot: from the legacy form only' : undefined} onClick={() => setActiveTab(tabKey(item))}>{item.source === 'screenshot' ? <Image size={12}/> : item.source === 'form' ? <FileText size={12}/> : null}{item.title}</button>)}</nav>}
      {pageNotes.length > 0 && <div className={`page-source ${tab.source}`}>{tab.source === 'screenshot' ? <Image size={14}/> : <FileText size={14}/>}<div>{pageNotes.map((note) => <p key={note}>{note}</p>)}</div></div>}

      <section className="form-panel">
        <div className="panel-title"><div><span>{readOnly ? 'QUERY / DISPLAY' : 'ENTRY DETAILS'}</span><h3>{readOnly ? 'Legacy display fields' : 'Record information'}</h3></div><small>{screen.lovs.length ? 'F9 SHOWS LEGACY LISTS' : isYes ? 'F9 LISTS NOT DOCUMENTED' : 'NO F9 LISTS IN LEGACY FORM'}</small></div>
        {docCode && !readOnly && <div className="doc-number"><Hash size={15}/><span>Document no.</span><strong>{values.__documentNo ?? 'Generated on save'}</strong><small>legacy CONTROL code {screen.controlCodes.join(', ')}</small></div>}
        {visibleFields.length && tab.sections?.length
          ? <SectionedForm sections={tab.sections} fields={visibleFields} renderField={(field) => <Field field={field} valueKey={valueKey(field)} value={values[valueKey(field)]} onChange={update} onLookup={setLookup} lookupAvailable={screen.lovs.length > 0} showSource={showSources || isYes}/>}/>
          : visibleFields.length
          ? <div className="form-grid">{visibleFields.map((field, index) => field.kind === 'heading'
            ? <h4 className="field-heading" key={`${field.label}-${index}`}>{field.label}</h4>
            : <Field key={`${valueKey(field)}-${index}`} field={field} valueKey={valueKey(field)} value={values[valueKey(field)]} onChange={update} onLookup={setLookup} lookupAvailable={screen.lovs.length > 0} showSource={showSources || isYes}/>)}</div>
          : <div className="empty"><BookOpen/><h3>{tab.source === 'form' || (tab.source && screen.sourceStatus !== 'missing') ? 'No fields on this page in the legacy form file' : 'No source-backed fields on this page'}</h3><p>Use the legacy reference and validate this page during the business walkthrough.</p></div>}
        <div className="required-note"><span>*</span> {isYes ? 'Required only where the discovery workbook marks a field mandatory.' : 'Required only where this form writes a NOT NULL column.'} Hover over a field to see its legacy evidence.{readOnly && <> <Lock size={11}/> Values typed here are query criteria and are not saved.</>}</div>
        {!isYes && <div className="source-legend">{Object.keys(FIELD_SOURCES).map((source) => <span key={source}><SourceTag source={source} compact/><SourceTag source={source}/>{FIELD_SOURCES[source][1]}</span>)}</div>}
        {screen.hiddenItems?.length > 0 && <details className="other-text"><summary>Hidden in the legacy form ({screen.hiddenItems.length}): items on no canvas, not shown as fields</summary><p>{screen.hiddenItems.map((item) => `${item.label} (${item.item})`).join(' · ')}</p></details>}
        {screen.unlabelledItems?.length > 0 && <details className="other-text"><summary>Items without a label in the legacy form ({screen.unlabelledItems.length}), not shown as fields</summary><p>{screen.unlabelledItems.join(' · ')}</p></details>}
        {screen.otherLegacyText.length > 0 && <details className="other-text"><summary>Other text in the legacy form ({screen.otherLegacyText.length}), not shown as fields</summary><p>{screen.otherLegacyText.join(' · ')}</p></details>}
      </section>
      <div className="action-bar">{buttons.map((label, index) => {
        const kind = actionKind(label)
        return <button key={`${label}-${index}`} disabled={kind === 'save' && !canSave} className={kind === 'save' ? 'primary-action' : ''} onClick={() => act(label)}>{actionIcon(label)}{label}</button>
      })}</div>
      {lookup && <LookupModal field={lookup} lovs={screen.lovs} onClose={() => setLookup('')}/>}
    </main>
  )
}

const browser = typeof window !== 'undefined'

export default function App() {
  const initial = useMemo(() => parseLocation(browser ? window.location.pathname : '/'), [])
  const [application, setApplication] = useState(initial.application)
  const { model, error } = useLegacyModel(application)
  const [route, setRoute] = useState(() => (browser && window.history.state?.route) || initial.route)
  const [query, setQuery] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const modules = useMemo(() => {
    if (!model) return []
    if (model.kind === 'yes' || model.kind === 'phoenix') return model.modules
    return LEGACY_MODULES.map(([name]) => model.modules.find((module) => module.module === name)).filter(Boolean)
  }, [model])
  const results = useMemo(() => {
    const text = query.trim().toLowerCase()
    if (!model || !text) return []
    const screenHits = Object.values(model.screens)
      .filter((screen) => `${screen.legIds.join(' ')} ${screen.menuLabel} ${screen.formName} ${screen.module} ${screen.fields.map((field) => field.label).join(' ')}`.toLowerCase().includes(text))
      .map((screen) => ({ key: screen.id, title: screen.menuLabel, detail: `${moduleLabel(screen.module)} · ${screen.formName ?? screen.submodule ?? ''} · ${screen.fields.filter((field) => field.kind === 'field').length} fields`, route: { type: 'screen', id: screen.id } }))
    const menuHits = Object.entries(model.legIndex)
      .filter(([legId, entry]) => entry.kind === 'menu' && entry.module && legId.toLowerCase().includes(text))
      .map(([legId, entry]) => ({ key: legId, title: `${legId} · legacy menu`, detail: moduleLabel(entry.module), route: { type: 'module', module: entry.module, path: entry.path } }))
    return [...screenHits, ...menuHits].slice(0, 14)
  }, [query, model])

  // Keep the URL in sync: /sun or /yes, then /menu/<module>/<codes> or /screen/<id>.
  useEffect(() => {
    if (!browser) return undefined
    if (!initial.canonical) window.history.replaceState({ application: initial.application, route: initial.route }, '', toPath(initial.application, initial.route))
    const onPopState = () => {
      const parsed = parseLocation(window.location.pathname)
      setApplication(parsed.application)
      setRoute(window.history.state?.route ?? parsed.route)
      setQuery('')
      setMobileOpen(false)
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [initial])

  const navigate = (nextApplication, next) => {
    setApplication(nextApplication)
    setRoute(next)
    setQuery('')
    setMobileOpen(false)
    if (!browser) return
    window.scrollTo(0, 0)
    const path = toPath(nextApplication, next)
    const state = { application: nextApplication, route: next }
    if (path === window.location.pathname) window.history.replaceState(state, '', path)
    else window.history.pushState(state, '', path)
  }
  const go = (next) => navigate(application, next)
  const switchApplication = (next) => navigate(next, { type: 'home' })

  const selectedScreen = model && route.type === 'screen' ? model.screens[route.id] : null
  const selectedModule = model && route.type === 'module' ? model.modules.find((module) => module.module === route.module) : null
  const isYes = application === 'yes'
  const activeModule = route.module ?? selectedScreen?.module
  const menuNode = selectedModule ? findMenuLevel(selectedModule, route.path ?? []).node : null
  const notFound = Boolean(model) && ((route.type === 'screen' && !selectedScreen) || (route.type === 'module' && (!selectedModule || ((route.path ?? []).length > 0 && !menuNode))))
  const pageTitle = !model ? 'Loading' : notFound ? 'Not found'
    : selectedScreen ? selectedScreen.menuLabel : selectedModule ? (menuNode?.label ?? moduleLabel(selectedModule.module)) : 'Overview'
  useEffect(() => { if (browser) document.title = `${pageTitle} · ${APPLICATIONS[application]}` }, [pageTitle, application])
  if (application === 'phoenix') return <PhoenixApp onSwitch={switchApplication}/>
  if (error) return <div className="fatal"><Factory/><h1>Unable to open {APPLICATIONS[application]}</h1><p>{error}</p><button className="tool" onClick={() => switchApplication(application === 'sun' ? 'yes' : 'sun')}>Open {APPLICATIONS[application === 'sun' ? 'yes' : 'sun']}</button></div>

  return (
    <div className={`app ${collapsed ? 'nav-collapsed' : ''}`}>
      <aside className={mobileOpen ? 'sidebar mobile-open' : 'sidebar'}>
        <div className="brand"><span><Factory/></span>{!collapsed && <div><strong>{isYes ? 'YES’s' : 'SUN’s'}</strong><small>{isYes ? 'LEGACY ERP' : 'FOUNDRY ERP'}</small></div>}<button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X/></button></div>
        <nav>
          <button className={route.type === 'home' ? 'active' : ''} onClick={() => go({ type: 'home' })}><Home/><span>Overview</span></button>
          <p>MODULES</p>
          {modules.map((module, index) => {
            const Icon = ICONS[index % ICONS.length]
            const count = new Set(flattenMenu(module.options).map(({ option }) => option.screenId).filter(Boolean)).size
            return <button key={module.module} className={activeModule === module.module ? 'active' : ''} title={moduleLabel(module.module)} onClick={() => go({ type: 'module', module: module.module, path: [] })}><Icon/><span>{moduleLabel(module.module)}</span><small>{count}</small></button>
          })}
        </nav>
        <div className="sidebar-foot"><div className="avatar"><Lock size={14}/></div>{!collapsed && <div><strong>Local replica session</strong><small>No database or user rights connected</small></div>}</div>
      </aside>
      <section className="workspace">
        <header className="topbar">
          <div>
            <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu/></button>
            <button className="collapse" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">{collapsed ? <PanelLeftOpen/> : <PanelLeftClose/>}</button>
            <div className="global-search"><Search/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={isYes ? 'Search YES’s screens and fields…' : 'Search forms, LEG ids, menu labels and fields…'}/>
              {results.length > 0 && <div className="search-results">{results.map((result) => <button key={result.key} onClick={() => go(result.route)}><div><strong>{result.title}</strong><small>{result.detail}</small></div><ChevronRight/></button>)}</div>}
            </div>
          </div>
          <div className="top-actions">
            <div className="application-context"><span>APPLICATION</span><select className="app-switcher" value={application} onChange={(event) => switchApplication(event.target.value)} aria-label="Application">{Object.entries(APPLICATIONS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></div>
            <div className="plant"><span></span><div><strong>Company / unit not set</strong><small>{isYes ? 'No database connected' : 'Legacy scopes data by COMPCODE / UNITCODE'}</small></div></div>
          </div>
        </header>
        {!model ? <div className="loading"><Factory/><p>Loading legacy menus and forms…</p></div>
          : route.type === 'home' ? <HomePage model={model} modules={modules} onOpenModule={(module) => go({ type: 'module', module, path: [] })} onOpenScreen={(id) => go({ type: 'screen', id })}/>
          : notFound ? <main className="content"><div className="empty"><BookOpen/><h3>Page not found</h3><p>This link does not match a {APPLICATIONS[application]} menu or screen.</p><button className="tool" onClick={() => go({ type: 'home' })}><Home size={15}/> {APPLICATIONS[application]} overview</button></div></main>
          : selectedModule ? <MenuPage key={`${application}/${selectedModule.module}/${(route.path ?? []).join('/')}`} module={selectedModule} path={route.path ?? []} model={model}
            onOpenScreen={(id) => go({ type: 'screen', id, from: { module: selectedModule.module, path: route.path ?? [] } })}
            onOpenPath={(path) => go({ type: 'module', module: selectedModule.module, path })} onBack={() => go({ type: 'home' })}/>
          : selectedScreen ? <ScreenPage key={`${application}/${selectedScreen.id}`} screen={selectedScreen} screenshotBase={model.screenshotBase} onBack={() => go(route.from ? { type: 'module', ...route.from } : { type: 'module', module: selectedScreen.module, path: [] })}/>
          : null}
      </section>
    </div>
  )
}
