import { useEffect, useMemo, useState } from 'react'
import {
  Activity, ArrowLeft, BarChart3, BookOpen, Boxes, CalendarDays, Check,
  ChevronDown, ChevronRight, ClipboardList, Database, Download, Factory,
  FileText, Gauge, Home, Image, LayoutGrid, Menu, MoreHorizontal, Package,
  PanelLeftClose, PanelLeftOpen, Printer, RotateCcw, Save, Search, Settings,
  ShieldCheck, Trash2, Users, Wrench, X,
} from 'lucide-react'
import { inputKind, isLikelyField, parseCatalogue, screenshotUrl } from './catalog'

const ICONS = [Factory, Users, ClipboardList, Gauge, Activity, LayoutGrid, Wrench, BarChart3, Package, FileText, Boxes, ShieldCheck, Database, Settings]

const LEGACY_MODULES = [
  ['Customer Master', 'CUSTOMER'], ['Product Master', 'PRODUCT'], ['Marketing Master', 'MARKETING'], ['Order Master', 'ORDERS'],
  ['Production Master', 'PRODUCTION'], ['Lab Master', 'LAB'], ['Subcontract Master', 'SUBCONTRACT'], ['Quality Master', 'QUALITY'],
  ['Sales Mater', 'SALES'], ['Onscreen Master', 'ON SCREEN'], ['Enquiry Master', 'ENQUIRY'], ['Heat Status Master', 'HEAT STATUS'],
  ['System Master', 'SYSTEM'], ['Stores Master', 'STORES'], ['Maintanence', 'MAINTENANCE'], ['Calibration', 'CALIBRATION'],
]
const MODULE_LABELS = Object.fromEntries(LEGACY_MODULES)
const LEGACY_MENU_IDS = {
  'Customer Master': 'LEG-006', 'Product Master': 'LEG-106', 'Marketing Master': 'LEG-075', 'Order Master': 'LEG-098',
  'Production Master': 'LEG-117', 'Lab Master': 'LEG-058', 'Subcontract Master': 'LEG-191', 'Quality Master': 'LEG-133',
  'Sales Mater': 'LEG-149', 'Onscreen Master': 'LEG-087', 'Enquiry Master': 'LEG-040', 'Heat Status Master': 'LEG-042',
  'System Master': 'LEG-207', 'Stores Master': 'LEG-151', 'Maintanence': 'LEG-064', Calibration: 'LEG-005',
}
const MENU_TARGETS = {
  'Stores Master|MASTER': 'LEG-164', 'Stores Master|PURCHASE': 'LEG-176', 'Stores Master|RECEIPT': 'LEG-182',
  'Stores Master|ISSUES': 'LEG-156', 'Stores Master|MATERIAL REJECTIONS': 'LEG-171', 'Stores Master|STOCK REPORTS': 'LEG-183',
  'Customer Master|COMPANY': 'LEG-009', 'Customer Master|CUSTOMER': 'LEG-010', 'Customer Master|PRODUCTMASTER': 'LEG-032',
  'Customer Master|GRADE': 'LEG-022', 'Customer Master|SUBCONTRACT / VENDOR': 'LEG-034', 'Customer Master|TAX': 'LEG-035',
  'Customer Master|SPECIAL / QUALITY REQUIREMENTS': 'LEG-033', 'Customer Master|pc RATE MASTER': 'LEG-031',
  'Customer Master|KG RATE MASTER': 'LEG-029', 'Customer Master|CASTING PROCESS MASTER': 'LEG-008',
  'Customer Master|BILL OF MATERIAL': 'LEG-007', 'Customer Master|EMPLOYEE MASTER': 'LEG-014',
  'Customer Master|USER RIGHT': 'LEG-037', 'Customer Master|MENUMASTER': 'LEG-030',
  'Calibration|EQUIPMENT MASTER': 'LEG-004', 'Calibration|EQUIPMENT ENTRY': 'LEG-003',
  'Calibration|CALIBRATION ENTRY': 'LEG-001', 'Calibration|CALIBRATION REPORT': 'LEG-002',
  'Heat Status Master|HEATS DETAILS': 'LEG-041', 'Heat Status Master|PRODUCT DET': 'LEG-041',
  'Maintanence|EHISTORY': 'LEG-066', 'Onscreen Master|ORDER VIEW': 'LEG-083',
  'Order Master|O.A. REPORTS': 'LEG-090', 'Product Master|DRAWING VIEW': 'LEG-099',
  'Stores Master|REPORTS': 'LEG-163', 'Stores Master|P.o. ENTRY': 'LEG-174',
  'Stores Master|P.o. DETAILS EDIT': 'LEG-172',
}
const moduleLabel = (module) => MODULE_LABELS[module] || module.toUpperCase()
const navWords = (value) => value.toLowerCase().replace(/acceptance/g, 'accept').replace(/despatch/g, 'dispatch').replace(/[^a-z0-9]+/g, ' ').split(' ').filter(word => word.length > 1 && !['master','entry','view','edit','report','reports','details','the','and'].includes(word))
function legacyScreenLabel(screen, screens) {
  for (const candidate of screens.filter(item => /navigation|menu/i.test(item.type) && item.module === screen.module)) {
    for (const option of candidate.options) {
      if (resolveLegacyOption(screen.module, option, screens)?.id === screen.id) return option
    }
  }
  return screen.title.toUpperCase()
}

function resolveLegacyOption(module, option, screens) {
  const fixed = MENU_TARGETS[`${module}|${option}`]
  if (fixed) return screens.find(screen => screen.id === fixed)
  const wanted = navWords(option)
  const candidates = screens.filter(screen => screen.module === module && !/navigation|menu/i.test(screen.type))
  return candidates.map(screen => {
    const words = navWords(screen.title)
    const overlap = wanted.filter(word => words.some(candidate => candidate === word || candidate.startsWith(word) || word.startsWith(candidate))).length
    return { screen, score: overlap / Math.max(wanted.length, words.length, 1) }
  }).sort((a, b) => b.score - a.score)[0]?.screen
}
function useCatalogue() {
  const [data, setData] = useState({ screens: [], modules: [] })
  const [error, setError] = useState('')
  useEffect(() => {
    fetch('/data/SSA_Foundry_Legacy_Application_Screen_Catalog.md')
      .then((response) => {
        if (!response.ok) throw new Error(`Catalogue could not be loaded (${response.status})`)
        return response.text()
      })
      .then((text) => setData(parseCatalogue(text)))
      .catch((reason) => setError(reason.message))
  }, [])
  return { ...data, error }
}

function Field({ screenId, label, required, value, onChange, onLookup }) {
  const kind = inputKind(label)
  const common = {
    id: `${screenId}-${label}`,
    value: value ?? '',
    required,
    placeholder: `Enter ${label.toLowerCase()}`,
    onChange: (event) => onChange(label, event.target.value),
    onKeyDown: (event) => {
      if (event.key === 'F9') { event.preventDefault(); onLookup(label) }
    },
  }
  return (
    <label className="field">
      <span>{label}{required && <b className="required"> *</b>}</span>
      <div className="input-wrap">
        {kind === 'textarea' ? <textarea {...common} rows="3" /> : <input {...common} type={kind} />}
        {kind === 'text' && <button type="button" className="lookup" title="Lookup (F9)" onClick={() => onLookup(label)}>F9</button>}
      </div>
    </label>
  )
}

function LookupModal({ field, onClose, onSelect }) {
  const rows = ['SSA-001 · Primary record', 'SSA-002 · Approved record', 'SSA-003 · Active record', 'SSA-004 · Reference record']
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section className="modal" onMouseDown={(e) => e.stopPropagation()}>
        <header><div><small>F9 REFERENCE LOOKUP</small><h3>Select {field}</h3></div><button onClick={onClose}><X size={20}/></button></header>
        <div className="modal-search"><Search size={17}/><input autoFocus placeholder={`Search ${field}…`} /></div>
        <div className="lookup-list">{rows.map((row) => <button key={row} onClick={() => onSelect(row.split(' · ')[0])}><span>{row}</span><ChevronRight size={17}/></button>)}</div>
      </section>
    </div>
  )
}

function HomePage({ screens, modules, onOpenModule, onOpenScreen }) {
  const fieldCount = screens.reduce((total, screen) => total + screen.fields.length, 0)
  const reports = screens.filter((screen) => /report|print/i.test(screen.type)).length
  return (
    <main className="content dashboard">
      <section className="hero">
        <div><span className="eyebrow">SSA CASTINGS · FOUNDRY OPERATIONS</span><h1>Good morning, Operator</h1><p>All legacy functions, reorganized for faster and clearer daily work.</p></div>
        <div className="hero-mark"><Factory/><span>FOUNDRY<br/>CONTROL</span></div>
      </section>
      <section className="stats">
        <article><span className="stat-icon teal"><LayoutGrid/></span><div><strong>{screens.length}</strong><p>Legacy screens</p></div></article>
        <article><span className="stat-icon gold"><Database/></span><div><strong>{fieldCount.toLocaleString()}</strong><p>Captured labels</p></div></article>
        <article><span className="stat-icon blue"><FileText/></span><div><strong>{reports}</strong><p>Reports & prints</p></div></article>
        <article><span className="stat-icon green"><Check/></span><div><strong>100%</strong><p>Screenshot coverage</p></div></article>
      </section>
      <div className="section-title"><div><span>OPERATIONS</span><h2>Application modules</h2></div><small>{modules.length} MODULES</small></div>
      <section className="module-grid">
        {modules.map((module, index) => {
          const Icon = ICONS[index % ICONS.length]
          const count = screens.filter((screen) => screen.module === module).length
          return <button className="module-card" key={module} onClick={() => onOpenModule(module)}><span className="module-icon"><Icon/></span><div><h3>{moduleLabel(module)}</h3><p>{count} screens and functions</p></div><ChevronRight/></button>
        })}
      </section>
      <section className="recent-panel"><div className="section-title"><div><span>QUICK ACCESS</span><h2>Common screens</h2></div></div><div className="recent-list">{screens.filter(s => /entry|master/i.test(s.type)).slice(0, 6).map(screen => <button key={screen.id} onClick={() => onOpenScreen(screen.id)}><strong>{screen.title}</strong><small>{moduleLabel(screen.module)}</small><ChevronRight size={17}/></button>)}</div></section>
    </main>
  )
}

function ModulePage({ module, screens, menuId, onOpenScreen, onOpenMenu, onBack }) {
  const menu = screens.find(screen => screen.id === (menuId || LEGACY_MENU_IDS[module]))
  const options = menu?.options ?? []
  return (
    <main className="content">
      <button className="back-link" onClick={menuId ? () => onOpenMenu(null) : onBack}><ArrowLeft size={17}/> {menuId ? moduleLabel(module) : 'Dashboard'}</button>
      <div className="page-heading"><div><span className="eyebrow">LEGACY APPLICATION MODULE</span><h1>{moduleLabel(module)}</h1><p>Select a function using the names and hierarchy from the legacy application.</p></div><div className="count-badge">{options.length}<small>OPTIONS</small></div></div>
      <section className="option-grid">{options.map((option, index) => {
        const target = resolveLegacyOption(module, option, screens)
        return <button key={`${option}-${index}`} onClick={() => target && (/navigation|menu/i.test(target.type) ? onOpenMenu(target.id) : onOpenScreen(target.id, option))}><span>{String(index + 1).padStart(2, '0')}</span><strong>{option}</strong><ChevronRight size={19}/></button>
      })}</section>
    </main>
  )
}

function DataPreview({ screen }) {
  const columns = screen.fields.filter(isLikelyField).slice(0, 5)
  if (!columns.length) return null
  return <section className="data-preview"><div className="panel-title"><div><span>LOCAL MOCK DATA</span><h3>Recent records</h3></div><button><Download size={16}/> Export</button></div><div className="table-scroll"><table><thead><tr>{columns.map(c => <th key={c}>{c}</th>)}<th>Status</th></tr></thead><tbody>{[1,2,3].map(i => <tr key={i}>{columns.map((c,j) => <td key={c}>{j === 0 ? `SSA-${String(i).padStart(3,'0')}` : '—'}</td>)}<td><span className="status">ACTIVE</span></td></tr>)}</tbody></table></div></section>
}

function ScreenPage({ screen, displayName, onBack, onNavigate }) {
  const storageKey = `ssa-foundry:${screen.id}`
  const [values, setValues] = useState(() => { try { return JSON.parse(localStorage.getItem(storageKey)) || {} } catch { return {} } })
  const [notice, setNotice] = useState('')
  const [lookup, setLookup] = useState('')
  const [showLegacy, setShowLegacy] = useState(false)
  const fields = screen.fields.filter(isLikelyField)
  const isMenu = /navigation|menu/i.test(screen.type)
  const isReport = /report|print/i.test(screen.type)

  const update = (label, value) => setValues((current) => ({ ...current, [label]: value }))
  const notify = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 2400) }
  const act = (action) => {
    const name = action.toLowerCase()
    if (/save|entry|approve/.test(name)) { localStorage.setItem(storageKey, JSON.stringify(values)); notify('Record saved locally') }
    else if (/clear|new|reset/.test(name)) { setValues({}); notify('Form cleared') }
    else if (/delete/.test(name)) { localStorage.removeItem(storageKey); setValues({}); notify('Local record deleted') }
    else if (/print|report/.test(name)) window.print()
    else if (/exit|back/.test(name)) onBack()
    else notify(`${action} action completed with mock data`)
  }

  return (
    <main className="content screen-page">
      {notice && <div className="toast"><Check size={17}/>{notice}</div>}
      <div className="screen-toolbar"><button className="back-link" onClick={onBack}><ArrowLeft size={17}/> {screen.module}</button><div><button className={showLegacy ? 'tool active' : 'tool'} onClick={() => setShowLegacy(!showLegacy)}><Image size={17}/> Legacy reference</button><button className="tool"><MoreHorizontal size={18}/></button></div></div>
      <header className="form-heading"><div><div className="form-meta"><small>{screen.type}</small>{screen.subgroup !== 'None' && <small>{screen.subgroup}</small>}</div><h1>{displayName}</h1><p>{screen.purpose}</p></div><span className="module-tag">{moduleLabel(screen.module)}</span></header>

      {showLegacy && <section className="legacy-reference"><div className="panel-title"><div><span>SOURCE EVIDENCE</span><h3>Legacy screenshot</h3></div><small>{screen.resolution}</small></div>{screen.screenshot ? <img src={screenshotUrl(screen.screenshot)} alt={`Legacy ${screen.title}`} /> : <p>No screenshot path recorded.</p>}</section>}

      {isMenu ? <section className="option-grid">{screen.options.map((option, i) => <button key={option} onClick={() => { const match = window.__SSA_SCREENS?.find(s => s.module === screen.module && s.title.toLowerCase().includes(option.toLowerCase().split('/')[0].trim())); if(match) onNavigate(match.id); else notify(`${option} is represented within this module`) }}><span>{String(i+1).padStart(2,'0')}</span><strong>{option}</strong><ChevronRight size={19}/></button>)}</section> : (
        <>
          <section className="form-panel">
            <div className="panel-title"><div><span>{isReport ? 'REPORT PARAMETERS' : 'ENTRY DETAILS'}</span><h3>{isReport ? 'Define report criteria' : 'Record information'}</h3></div><small>F9 OPENS LOOKUP</small></div>
            {fields.length ? <div className="form-grid">{fields.map((field) => <Field key={field} screenId={screen.id} label={field} required={screen.requiredFields.includes(field)} value={values[field]} onChange={update} onLookup={setLookup}/>)}</div> : <div className="empty"><BookOpen/><h3>No editable labels identified</h3><p>Use the legacy reference and validate this screen during the business walkthrough.</p></div>}
            <div className="required-note"><span>*</span> Required markers are shown only when confirmed by legacy metadata.</div>
          </section>
          <div className="action-bar">{screen.actions.length ? screen.actions.map((action, index) => <button key={`${action}-${index}`} className={index === 0 ? 'primary-action' : ''} onClick={() => act(action)}>{/delete/i.test(action) ? <Trash2/> : /print|report/i.test(action) ? <Printer/> : /clear|reset/i.test(action) ? <RotateCcw/> : <Save/>}{action}</button>) : <button className="primary-action" onClick={() => act('Save draft')}><Save/>Save local draft</button>}</div>
          <DataPreview screen={screen}/>
        </>
      )}
      {lookup && <LookupModal field={lookup} onClose={() => setLookup('')} onSelect={(value) => { update(lookup, value); setLookup('') }}/>} 
    </main>
  )
}

export default function App() {
  const { screens, modules, error } = useCatalogue()
  const [route, setRoute] = useState({ type: 'home' })
  const [query, setQuery] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const selectedScreen = screens.find((screen) => screen.id === route.id)
  const navigationModules = LEGACY_MODULES.map(([module]) => module).filter(module => screens.some(screen => screen.module === module))
  const moduleScreens = screens.filter((screen) => screen.module === route.module)
  const results = useMemo(() => query.trim() ? screens.filter((screen) => `${screen.id} ${screen.title} ${screen.module} ${screen.fields.join(' ')}`.toLowerCase().includes(query.toLowerCase())).slice(0, 12) : [], [query, screens])
  useEffect(() => { window.__SSA_SCREENS = screens }, [screens])

  const go = (next) => { setRoute(next); setQuery(''); setMobileOpen(false); window.scrollTo(0, 0) }
  if (error) return <div className="fatal"><Factory/><h1>Unable to open SSA Foundry</h1><p>{error}</p></div>

  return (
    <div className={`app ${collapsed ? 'nav-collapsed' : ''}`}>
      <aside className={mobileOpen ? 'sidebar mobile-open' : 'sidebar'}>
        <div className="brand"><span><Factory/></span>{!collapsed && <div><strong>SSA</strong><small>FOUNDRY ERP</small></div>}<button className="mobile-close" onClick={() => setMobileOpen(false)}><X/></button></div>
        <nav><button className={route.type === 'home' ? 'active' : ''} onClick={() => go({type:'home'})}><Home/><span>Overview</span></button><p>MODULES</p>{navigationModules.map((module, index) => { const Icon=ICONS[index%ICONS.length]; return <button key={module} className={route.module === module ? 'active' : ''} title={moduleLabel(module)} onClick={() => go({type:'module',module})}><Icon/><span>{moduleLabel(module)}</span><small>{screens.filter(s=>s.module===module).length}</small></button>})}</nav>
        <div className="sidebar-foot"><div className="avatar">KO</div>{!collapsed && <div><strong>Kaviya Operator</strong><small>System administrator</small></div>}<Settings size={18}/></div>
      </aside>
      <section className="workspace">
        <header className="topbar"><div><button className="mobile-menu" onClick={() => setMobileOpen(true)}><Menu/></button><button className="collapse" onClick={() => setCollapsed(!collapsed)}>{collapsed ? <PanelLeftOpen/> : <PanelLeftClose/>}</button><div className="global-search"><Search/><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search all screens, modules and fields…"/><kbd>⌘ K</kbd>{results.length > 0 && <div className="search-results">{results.map(screen=><button key={screen.id} onClick={()=>go({type:'screen',id:screen.id,module:screen.module,label:legacyScreenLabel(screen,screens)})}><div><strong>{screen.title}</strong><small>{moduleLabel(screen.module)} · {screen.fields.length} fields</small></div><ChevronRight/></button>)}</div>}</div></div><div className="top-actions"><button><CalendarDays/></button><button><Activity/></button><div className="plant"><span></span><div><strong>SSA Plant 01</strong><small>Operations online</small></div><ChevronDown/></div></div></header>
        {!screens.length ? <div className="loading"><Factory/><p>Loading 208 legacy screens…</p></div> : route.type === 'home' ? <HomePage screens={screens} modules={navigationModules} onOpenModule={(module)=>go({type:'module',module})} onOpenScreen={(id)=>{const s=screens.find(x=>x.id===id);go({type:'screen',id,module:s.module})}}/> : route.type === 'module' ? <ModulePage module={route.module} screens={moduleScreens} menuId={route.menuId} onOpenScreen={(id,label)=>go({type:'screen',id,module:route.module,label})} onOpenMenu={(menuId)=>go({type:'module',module:route.module,menuId})} onBack={()=>go({type:'home'})}/> : selectedScreen ? <ScreenPage screen={selectedScreen} displayName={route.label || legacyScreenLabel(selectedScreen, screens)} onNavigate={(id)=>{const s=screens.find(x=>x.id===id);go({type:'screen',id,module:s.module})}} onBack={()=>go({type:'module',module:selectedScreen.module})}/> : null}
      </section>
    </div>
  )
}
