const clean = (value = '') => value.replace(/^`|`$/g, '').trim()

// Screenshot OCR can return both captions and displayed business values.
// Cross-checked screen corrections take precedence over OCR output.
const SCREEN_CORRECTIONS = {
  'LEG-003': { fields: ['Instrument Code', 'Instrument Name', 'Manufacturer No.', 'Frequency', 'Accuracy', 'Allowable Error', 'Department', 'In-House / External', 'Condition', 'Approved Vendor', 'Remarks'], requiredFields: ['Instrument Code', 'Instrument Name', 'Frequency'] },
  'LEG-004': { fields: ['Equipment Code', 'Equipment Name', 'Frequency', 'Range', 'Acceptance Type'], requiredFields: ['Equipment Code', 'Equipment Name', 'Frequency'] },
  'LEG-007': { fields: ['Bill of Material Grade', 'Material Name', 'Quantity per Ton', 'Total'], requiredFields: ['Bill of Material Grade', 'Material Name', 'Quantity per Ton'] },
  'LEG-008': { fields: ['Process Code', 'Process Name', 'Sequence No.', 'Mandatory', 'Allow Pour Quantity'], requiredFields: ['Process Code', 'Process Name', 'Sequence No.'] },
  'LEG-009': {
    fields: ['Company Code', 'Company Name', 'Short Name', 'Factory Address 1', 'Address 2', 'Address 3', 'Address 4', 'City', 'Pincode', 'Sales Tax No. & Date', 'Central Sales Tax No. & Date', 'ECC No.', 'GST No.', 'Contact Person 1', 'Contact Person 2', 'CEC No. & Date', 'IEC No. & Date', 'Bank', 'Phone', 'Fax', 'Email 1', 'Email 2', 'Administration Address 1', 'Administration Address 2', 'Administration Address 3', 'Administration Address 4', 'Administration City', 'Administration Pincode', 'Administration Phone', 'Administration Fax', 'Range', 'Foundry Type', 'Division'],
    requiredFields: ['Company Code', 'Company Name'],
  },
  'LEG-014': { fields: ['Employee Code', 'Employee Name', 'Department', 'Designation', 'Joining Date', 'Working Status', 'Resignation Date'], requiredFields: ['Employee Code', 'Employee Name', 'Department'] },
  'LEG-015': { fields: ['Department Code', 'Department Name'], requiredFields: ['Department Code', 'Department Name'] },
  'LEG-016': { fields: ['Part Number', 'Part Description', 'Grade', 'Drawing Number', 'Material Code', 'Product Group'], requiredFields: ['Part Number', 'Part Description'] },
  'LEG-018': { fields: ['Process Code', 'Contractor Process', 'Subcontract Category', 'Weight From', 'Weight To', 'Rate per Kg'], requiredFields: ['Process Code', 'Contractor Process'] },
  'LEG-020': { fields: ['Furnace Code', 'Furnace Name', 'Furnace Type'], requiredFields: ['Furnace Code', 'Furnace Name'] },
  'LEG-021': { fields: ['Rejection Code', 'Rejection Reason'], requiredFields: ['Rejection Code', 'Rejection Reason'] },
  'LEG-072': { fields: ['Report', 'Customer', 'From Date', 'To Date'], requiredFields: ['Report'] },
  'LEG-157': { fields: ['Department Code', 'Department Name', 'Short Name'], requiredFields: ['Department Code', 'Department Name'] },
  'LEG-158': { fields: ['Item Group', 'From Days', 'To Days', 'Delay Value'], requiredFields: ['Item Group', 'From Days', 'To Days', 'Delay Value'] },
  'LEG-159': { fields: ['Item Group Code', 'Item Group Name', 'Subgroup Code', 'Subgroup Name'], requiredFields: ['Item Group Code', 'Item Group Name'] },
  'LEG-161': { fields: ['Item Code', 'Item Description', 'Opening Quantity', 'Rate per Unit', 'Opening Value'], requiredFields: ['Item Code', 'Opening Quantity', 'Rate per Unit'] },
}
export function parseCatalogue(markdown) {
  const lines = markdown.split(/\r?\n/)
  const screens = []
  let screen = null
  let section = ''

  for (const line of lines) {
    const heading = line.match(/^### (LEG-\d{3})\s+(?:—|â€”|-)\s+(.+)$/)
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

  for (const item of screens) {
    const correction = SCREEN_CORRECTIONS[item.id]
    item.requiredFields = correction?.requiredFields ?? []
    if (correction?.fields) item.fields = correction.fields
  }

  const modules = [...new Set(screens.map((item) => item.module))]
  return { screens, modules }
}

export function screenshotUrl(path) {
  return `/legacy-screens/${path.split('\\').map(encodeURIComponent).join('/')}`
}

export function inputKind(label) {
  const value = label.toLowerCase()
  if (/date|dated|valid upto|calibrated on|due on/.test(value)) return 'date'
  if (/email/.test(value)) return 'email'
  if (/qty|quantity|weight|rate|amount|value|days|frequency|error|total|number|\bno\b|\bwt\b/.test(value)) return 'number'
  if (/remarks|instruction|address|description|requirement|details|reason|notes/.test(value)) return 'textarea'
  return 'text'
}

const NON_FIELD_TEXT = /^(window\d*|mis|save|exit|back|clear|report|entry|master|list|history)$/i
const SCREEN_HEADING_TEXT = /^(customer|company|product|grade|supplier|department|group|item|equipment|calibration|purchase order|goods receipt|inspection|foundry status) (master|entry|reports?)$/i
const SAMPLE_VALUE_TEXT = /private limited|castings india|gears\s*&\s*drives|agro implements|flow technology|heavy electricals|testing machine|\bgr[_ .-]?\d|\bclass\b.*\d|\bbody\b.*\d/i

export function isLikelyField(label) {
  const value = label.trim()
  if (!value || value.length > 72) return false
  if (/^\d+[,'/]|^\[|^window\d|^none$/i.test(value)) return false
  if (/@|^[\d\s()+./-]{7,}$|^[A-Z][A-Z0-9.]*_[A-Z0-9._]+$/.test(value)) return false
  if (/^[A-Z0-9]{10,}$/.test(value) && /\d/.test(value)) return false
  if (NON_FIELD_TEXT.test(value) || SCREEN_HEADING_TEXT.test(value) || SAMPLE_VALUE_TEXT.test(value)) return false
  if (/^(active|approved|working|resigned|original|duplicate|triplicate|quadruplicate)$/i.test(value)) return false
  return true
}