import { useEffect, useMemo, useState } from 'react'
import {
  Activity, ArrowLeft, BarChart3, BookOpen, Boxes, Check, ChevronRight, ClipboardList, Database,
  Factory, FileText, FolderOpen, Gauge, Hash, Home, Image, Info, LayoutGrid, Lock, Menu, Package,
  PanelLeftClose, PanelLeftOpen, Printer, RotateCcw, Save, Search, Settings, ShieldCheck, Trash2,
  TriangleAlert, Users, Wrench, X,
} from 'lucide-react'
import { actionKind, buildModel, buildYesModel, findMenuLevel, flattenMenu, parseCatalogue, screenshotUrl } from './catalog'
import { parseLocation, toPath } from './routes'

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
const APPLICATIONS = { sun: 'SUN’s Foundry', yes: 'YES’s Foundry' }
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
    const request = application === 'yes'
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

function Field({ field, value, onChange, onLookup, lookupAvailable }) {
  const id = `field-${field.label}`
  const type = ['date', 'number', 'password', 'checkbox', 'select'].includes(field.type) ? field.type : 'text'
  const step = type === 'number' ? (field.scale ? String(10 ** -field.scale) : '1') : undefined
  const hint = [
    field.item && `Legacy item ${field.item}${field.databaseItem ? ' (database item)' : ''}`,
    field.column && `${field.column} ${field.columnType ?? ''}`.trim(),
    field.formatMask && `Format mask ${field.formatMask}`,
    field.requiredEvidence && `Required: ${field.requiredEvidence}`,
    ...(field.validationMessages ?? []).map((message) => `Legacy message: ${message}`),
    `Evidence: ${(field.evidence ?? []).join('; ')}`,
  ].filter(Boolean).join('\n')
  return (
    <label className="field" htmlFor={id} title={hint}>
      <span>{field.label}{field.required && <b className="required"> *</b>}</span>
      <div className="input-wrap">
        {type === 'checkbox'
          ? <input id={id} type="checkbox" className="checkbox" checked={value === 'Y'} onChange={(event) => onChange(field.label, event.target.checked ? 'Y' : '')} />
          : type === 'select'
          ? <select id={id} value={value ?? ''} required={field.required} onChange={(event) => onChange(field.label, event.target.value)}><option value="">—</option>{field.options.map((option) => <option key={option} value={option}>{option}</option>)}</select>
          : <input id={id} type={type} step={step} value={value ?? ''} required={field.required} maxLength={field.maxLength ?? undefined}
          onChange={(event) => onChange(field.label, event.target.value)}
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
        const reason = option.unavailableNote ?? (option.formName ? `legacy form ${option.formName} ${option.formInSource ? 'is in SUN legacy source' : 'is not in SUN legacy source'}` : 'no legacy form')
        return (
          <button key={option.code} disabled={disabled} title={disabled ? `No screenshot was captured for this option (${reason})` : option.formName ?? option.label}
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

export function ScreenPage({ screen, screenshotBase = '/legacy-screens', onBack }) {
  const storageKey = `sun-foundry:form:${screen.storageKey}`
  const [values, setValues] = useState(() => readStore(storageKey, {}))
  const [notice, setNotice] = useState('')
  const [lookup, setLookup] = useState('')
  const [showLegacy, setShowLegacy] = useState(false)
  const [activeTab, setActiveTab] = useState(screen.tabs[0].legId)
  const multiTab = screen.tabs.length > 1
  const unassigned = screen.fields.filter((field) => !screen.legIds.includes(field.tab))
  const tabs = multiTab && unassigned.length ? [...screen.tabs, { legId: '__other', title: 'Other legacy fields' }] : screen.tabs
  const visibleFields = !multiTab ? screen.fields : activeTab === '__other' ? unassigned : screen.fields.filter((field) => field.tab === activeTab)
  const tab = screen.tabs.find((item) => item.legId === activeTab) ?? screen.tabs[0]
  const verified = VERIFIED_STATUSES.includes(screen.sourceStatus)
  const isYes = screen.storageKey.startsWith('yes:')
  const canSave = screen.writesData || !verified
  const readOnly = verified && !screen.writesData
  const docCode = screen.controlCodes[0]

  const notify = (message) => { setNotice(message); window.setTimeout(() => setNotice(''), 4200) }
  const update = (label, value) => setValues((current) => ({ ...current, [label]: value }))
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
      <div className="screen-toolbar"><button className="back-link" onClick={onBack}><ArrowLeft size={17}/> {moduleLabel(screen.module)}</button><div><button className={showLegacy ? 'tool active' : 'tool'} onClick={() => setShowLegacy(!showLegacy)}><Image size={17}/> Legacy reference</button></div></div>
      <header className="form-heading">
        <div>
          <div className="form-meta">{isYes ? <small>{screen.submodule ?? 'YES’s'}</small> : <><small>{screen.formName}{screen.formFile ? ` · ${screen.formFile}` : ''}</small><small>Menu {screen.menuCode}</small></>}<small>{screen.legIds.join(', ')}</small></div>
          <h1>{screen.menuLabel}</h1>
          <p>{readOnly ? 'The legacy form is read-only (it writes no tables).' : screen.writeTables.length ? `Legacy writes: ${screen.writeTables.join(', ')}` : tab.purpose}</p>
        </div>
        <span className="module-tag">{moduleLabel(screen.module)}</span>
      </header>

      {screen.sourceStatus === 'fallback' && <div className="banner warn"><TriangleAlert size={17}/><div><strong>Based on an older legacy form.</strong> The live menu runs <code>{screen.formName}</code>, which is not in SUN legacy source. Fields come from <code>{screen.formFile}</code> and must be confirmed on the live system.</div></div>}
      {screen.sourceStatus === 'workbook' && <div className="banner warn"><TriangleAlert size={17}/><div><strong>Not verified against the YES’s legacy source.</strong> Fields and control types come from the supplied screenshots and the YES’s discovery workbook. Mandatory rules, lookups and table mappings are not confirmed.</div></div>}
      {screen.sourceStatus === 'not-supplied' && <div className="banner danger"><TriangleAlert size={17}/><div><strong>Screenshot not supplied.</strong> This screen is listed in the YES’s discovery workbook, but no screen evidence was provided, so no fields are shown.</div></div>}
      {screen.sourceStatus === 'missing' && <div className="banner danger"><TriangleAlert size={17}/><div><strong>Unverified screen.</strong> The legacy form <code>{screen.formName}</code> is not in SUN legacy source. These fields are screenshot text only; their types and required rules are unknown.</div></div>}

      {showLegacy && <section className="legacy-reference"><div className="panel-title"><div><span>SOURCE EVIDENCE</span><h3>Legacy screenshot · {tab.title}</h3></div><small>{tab.resolution}</small></div>{shots.length ? <div className="reference-grid">{shots.map((shot) => <img key={shot} src={screenshotUrl(shot, screenshotBase)} alt={`Legacy ${tab.title}`} />)}</div> : <p>No screenshot was supplied for this screen.</p>}</section>}

      {multiTab && <nav className="form-tabs" aria-label="Legacy form pages">{tabs.map((item) => <button key={item.legId} className={item.legId === activeTab ? 'active' : ''} onClick={() => setActiveTab(item.legId)}>{item.title}</button>)}</nav>}

      <section className="form-panel">
        <div className="panel-title"><div><span>{readOnly ? 'QUERY / DISPLAY' : 'ENTRY DETAILS'}</span><h3>{readOnly ? 'Legacy display fields' : 'Record information'}</h3></div><small>{screen.lovs.length ? 'F9 SHOWS LEGACY LISTS' : isYes ? 'F9 LISTS NOT DOCUMENTED' : 'NO F9 LISTS IN LEGACY FORM'}</small></div>
        {docCode && !readOnly && <div className="doc-number"><Hash size={15}/><span>Document no.</span><strong>{values.__documentNo ?? 'Generated on save'}</strong><small>legacy CONTROL code {screen.controlCodes.join(', ')}</small></div>}
        {visibleFields.length
          ? <div className="form-grid">{visibleFields.map((field, index) => field.kind === 'heading'
            ? <h4 className="field-heading" key={`${field.label}-${index}`}>{field.label}</h4>
            : <Field key={`${field.label}-${index}`} field={field} value={values[field.label]} onChange={update} onLookup={setLookup} lookupAvailable={screen.lovs.length > 0}/>)}</div>
          : <div className="empty"><BookOpen/><h3>No source-backed fields on this page</h3><p>Use the legacy reference and validate this screen during the business walkthrough.</p></div>}
        <div className="required-note"><span>*</span> {isYes ? 'Required only where the discovery workbook marks a field mandatory.' : 'Required only where this form writes a NOT NULL column.'} Hover over a field to see its legacy evidence.{readOnly && <> <Lock size={11}/> Values typed here are query criteria and are not saved.</>}</div>
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
    if (model.kind === 'yes') return model.modules
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
