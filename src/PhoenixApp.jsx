import { useMemo, useState } from 'react'
import {
  ArrowLeft, BarChart3, Boxes, Building2, Calculator, Check, ChevronDown, ChevronRight, CircleDot,
  Database, DollarSign, Factory, FlaskConical, Gauge, Hammer, Home, Layers3, Menu, PanelLeftClose,
  PanelLeftOpen, Plus, Repeat2, RotateCcw, Ruler, Save, Search, Settings, ShieldCheck, ShoppingCart,
  Truck, Users, Warehouse, Wrench, X,
} from 'lucide-react'
import { buildPhoenixSeed, findPhoenixMaster, PHOENIX_MODULES, PHOENIX_MODULE_GUIDANCE, PHOENIX_PHASES } from './phoenixData'

const STORAGE_KEY = 'phoenix-erp:phase-1-masters'
const MODULE_ICONS = [Building2, Layers3, Users, Boxes, Wrench, Gauge, Settings, ShieldCheck]
const PHASE_ICONS = [Building2, ShoppingCart, Ruler, DollarSign, Warehouse, Hammer, Factory, FlaskConical, Repeat2, Truck, Calculator, BarChart3]
const clone = (value) => JSON.parse(JSON.stringify(value))
const loadData = () => {
  const seed = buildPhoenixSeed()
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (!stored) return seed
    return Object.fromEntries(Object.entries(seed).map(([masterId, records]) => [masterId, stored[masterId] ?? records]))
  } catch { return seed }
}
const displayValue = (value) => typeof value === 'boolean' ? (value ? 'Yes' : 'No') : (value || '—')

function ApplicationSelect({ onSwitch }) {
  return <div className="application-context"><span>APPLICATION</span><select className="app-switcher" value="phoenix" onChange={(event) => onSwitch(event.target.value)} aria-label="Application"><option value="sun">SUN’s Foundry</option><option value="yes">YES’s Foundry</option><option value="phoenix">Phoenix ERP</option></select></div>
}

function PhoenixNavigation({ activeModule, expandedPhase, onExpand, onOpenModule }) {
  return <nav className="phoenix-navigation">
    <p>ERP ROADMAP</p>
    {PHOENIX_PHASES.map((phase, index) => {
      const expanded = expandedPhase === phase.id
      const phaseActive = phase.number === 1 && Boolean(activeModule)
      const PhaseIcon = PHASE_ICONS[index]
      return <section className={`phase-nav ${expanded ? 'expanded' : ''}`} key={phase.id}>
        <button className={`phase-toggle ${phaseActive ? 'phase-active' : ''}`} onClick={() => onExpand(expanded ? '' : phase.id)} title={phase.name}>
          <span className="phase-number"><PhaseIcon/></span><span className="phase-label"><strong>{phase.name}</strong><small>{phase.modules.length} modules · {phase.status}</small></span><ChevronDown className="phase-chevron"/>
        </button>
        {expanded && <div className="phase-modules">{phase.modules.map((module, index) => module.available
          ? <button key={module.id} className={activeModule === module.id ? 'active' : ''} onClick={() => onOpenModule(module.id)}><span>{module.name}</span></button>
          : <div className="planned-module" key={`${phase.id}-${index}`} title="Planned in the BRD; screen not implemented"><span>{module.name}</span></div>)}</div>}
      </section>
    })}
  </nav>
}

function ModuleEvidence({ moduleId, compact = false }) {
  const guidance = PHOENIX_MODULE_GUIDANCE[moduleId]
  if (!guidance) return null
  if (compact) return <div className="module-evidence-compact"><Database size={15}/><div><strong>Legacy-informed future-state form</strong><span>SUN’s: {guidance.sunEvidence.join(', ')} · YES’s: {guidance.yesEvidence.join(', ')}</span></div></div>
  return <section className="module-evidence">
    <div className="evidence-purpose"><span className="eyebrow">WHY THIS DATA EXISTS</span><p>{guidance.purpose}</p></div>
    <div className="evidence-grid">
      <article><header><Database/><strong>SUN’s corresponding data</strong></header><ul>{guidance.sunEvidence.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article><header><Database/><strong>YES’s corresponding data</strong></header><ul>{guidance.yesEvidence.map((item) => <li key={item}>{item}</li>)}</ul></article>
      <article><header><ChevronRight/><strong>Used later in Phoenix</strong></header><ul>{guidance.futureUse.map((item) => <li key={item}>{item}</li>)}</ul></article>
    </div>
    <div className="design-boundary"><ShieldCheck size={17}/><div><strong>Future-state design boundary</strong><span>{guidance.boundary}</span></div></div>
  </section>
}

function Dashboard({ data, onOpenModule, onOpenMaster }) {
  const masterCount = PHOENIX_MODULES.reduce((count, module) => count + module.masters.length, 0)
  const recordCount = Object.values(data).reduce((count, records) => count + records.length, 0)
  const requests = data['master-requests'] ?? []
  const pending = requests.filter((record) => !['Approved', 'Rejected'].includes(record.approvalStatus)).length
  return <main className="content dashboard phoenix-content">
    <section className="hero phoenix-hero"><div><span className="eyebrow">PHOENIX ERP · FUTURE STATE</span><h1>Enterprise setup & master data</h1><p>Configure the organization, operating structure and governed reference data used by every Phoenix business process.</p></div><div className="hero-mark"><Factory/><span>PHOENIX<br/>ERP</span></div></section>
    <div className="demo-banner"><CircleDot size={16}/><div><strong>Interactive prototype with synthetic data</strong><span>Records are editable and saved only in this browser. No production system or customer database is connected.</span></div></div>
    <section className="stats phoenix-stats">
      <article><span className="stat-icon teal"><Layers3/></span><div><strong>8</strong><p>Core setup modules</p></div></article>
      <article><span className="stat-icon gold"><Database/></span><div><strong>{masterCount}</strong><p>Master registers</p></div></article>
      <article><span className="stat-icon blue"><Boxes/></span><div><strong>{recordCount}</strong><p>Demo records</p></div></article>
      <article><span className="stat-icon green"><ShieldCheck/></span><div><strong>{pending}</strong><p>Requests awaiting decision</p></div></article>
    </section>
    <div className="section-title"><div><span>CORE ERP FOUNDATION</span><h2>Organization Structure & Reference Masters</h2></div><small>AVAILABLE</small></div>
    <section className="module-grid phoenix-module-grid">{PHOENIX_MODULES.map((module, index) => {
      const Icon = MODULE_ICONS[index]
      const count = module.masters.reduce((total, master) => total + (data[master.id]?.length ?? 0), 0)
      return <button className="module-card" key={module.id} onClick={() => onOpenModule(module.id)}><span className="module-icon"><Icon/></span><div><h3>{module.name}</h3><p>{module.masters.length} registers · {count} records</p></div><ChevronRight/></button>
    })}</section>
    <section className="recent-panel"><div className="section-title"><div><span>QUICK ACCESS</span><h2>Frequently used masters</h2></div></div><div className="recent-list">{['companies', 'plants', 'business-partners', 'items', 'number-series', 'users']
      .map((id) => ({ id, found: findPhoenixMaster(id) }))
      .filter(({ found }) => Boolean(found))
      .map(({ id, found }) => <button key={id} onClick={() => onOpenMaster(found.module.id, id)}><span>{found.module.short}</span><strong>{found.master.name}</strong><small>{data[id]?.length ?? 0} records</small><ChevronRight size={17}/></button>)}</div></section>
  </main>
}

function ModulePage({ module, data, onBack, onOpenMaster }) {
  return <main className="content phoenix-content">
    <button className="back-link" onClick={onBack}><ArrowLeft size={17}/> Overview</button>
    <div className="page-heading"><div><span className="eyebrow">PHOENIX · CORE SETUP</span><h1>{module.name}</h1><p>{module.description}</p></div><div className="count-badge">{module.masters.length}<small>REGISTERS</small></div></div>
    <ModuleEvidence moduleId={module.id}/>
    <div className="section-title"><div><span>MASTER REGISTERS</span><h2>Available setup screens</h2></div><small>{module.masters.length} REGISTERS</small></div>
    <section className="option-grid phoenix-register-grid">{module.masters.map((master, index) => <button key={master.id} onClick={() => onOpenMaster(master.id)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{master.name}<small className="option-note">{master.description} · {data[master.id]?.length ?? 0} records</small></strong><ChevronRight size={19}/></button>)}</section>
  </main>
}

function MasterList({ module, master, records, query, onQuery, onBack, onEdit, onCreate }) {
  const visibleFields = master.fields.filter((field) => !['textarea', 'boolean'].includes(field[2])).slice(0, 5)
  const filtered = records.filter((record) => !query || Object.values(record).some((value) => String(value).toLowerCase().includes(query.toLowerCase())))
  return <main className="content phoenix-content master-list-page">
    <button className="back-link" onClick={onBack}><ArrowLeft size={17}/> {module.name}</button>
    <div className="page-heading"><div><span className="eyebrow">{module.short} · MASTER REGISTER</span><h1>{master.name}</h1><p>{master.description}</p></div><button className="primary-action phoenix-new" onClick={onCreate}><Plus size={17}/> New record</button></div>
    <section className="master-list-card">
      <div className="master-list-tools"><div className="master-search"><Search size={16}/><input value={query} onChange={(event) => onQuery(event.target.value)} placeholder={`Search ${master.name.toLowerCase()}…`}/></div><span>{filtered.length} of {records.length} records</span></div>
      {filtered.length ? <div className="table-scroll"><table className="master-table"><thead><tr>{visibleFields.map((field) => <th key={field[0]}>{field[1]}</th>)}<th></th></tr></thead><tbody>{filtered.map((record) => <tr key={record.id} onClick={() => onEdit(record.id)}>{visibleFields.map((field) => <td key={field[0]}>{field[2] === 'status' ? <span className={`status-pill ${String(record[field[0]]).toLowerCase().replaceAll(' ', '-')}`}>{displayValue(record[field[0]])}</span> : displayValue(record[field[0]])}</td>)}<td><button className="row-open" aria-label="Edit record"><ChevronRight size={17}/></button></td></tr>)}</tbody></table></div>
        : <div className="empty"><Database/><h3>No records found</h3><p>Change the search or create a new record.</p></div>}
    </section>
  </main>
}

function FormControl({ field, value, onChange }) {
  const [key, label, type, required, options] = field
  const id = `phoenix-${key}`
  if (type === 'boolean') return <label className="phoenix-check" htmlFor={id}><input id={id} type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(key, event.target.checked)}/><span><strong>{label}</strong><small>{value ? 'Enabled' : 'Disabled'}</small></span></label>
  return <label className={`field ${type === 'textarea' ? 'wide-field' : ''}`} htmlFor={id}><span>{label}{required && <b className="required"> *</b>}</span><div className="input-wrap">
    {type === 'textarea' ? <textarea id={id} value={value ?? ''} required={required} rows="3" onChange={(event) => onChange(key, event.target.value)}/>
      : ['select', 'status'].includes(type) ? <select id={id} value={value ?? ''} required={required} onChange={(event) => onChange(key, event.target.value)}><option value="">Select…</option>{(type === 'status' ? ['Active', 'Inactive'] : options ?? []).map((option) => <option key={option} value={option}>{option}</option>)}</select>
        : <input id={id} type={type} value={value ?? ''} required={required} onChange={(event) => onChange(key, event.target.value)}/>}</div></label>
}

function MasterForm({ module, master, record, isNew, onBack, onSave }) {
  const [draft, setDraft] = useState(() => clone(record))
  const [errors, setErrors] = useState([])
  const update = (key, value) => setDraft((current) => ({ ...current, [key]: value }))
  const submit = (event) => {
    event.preventDefault()
    const missing = master.fields.filter((field) => field[3] && !String(draft[field[0]] ?? '').trim()).map((field) => field[1])
    setErrors(missing)
    if (!missing.length) onSave({ ...draft, id: draft.id || `${master.id.toUpperCase()}-${Date.now()}` })
  }
  return <main className="content phoenix-content screen-page">
    <button className="back-link" onClick={onBack}><ArrowLeft size={17}/> {master.name}</button>
    <header className="form-heading phoenix-form-heading"><div><div className="form-meta"><small>PHOENIX CORE SETUP</small><small>{module.name}</small><small>{isNew ? 'NEW RECORD' : record.id}</small></div><h1>{isNew ? `New ${master.name.replace(/s$/, '')}` : draft.name || draft.code || master.name}</h1><p>{master.description}</p></div><span className="module-tag">{isNew ? 'DRAFT' : (draft.status || draft.approvalStatus || 'RECORD')}</span></header>
    <ModuleEvidence moduleId={module.id} compact/>
    <div className="demo-banner compact"><ShieldCheck size={16}/><div><strong>Controlled master-data entry</strong><span>Required fields are marked with *. Changes in this prototype are retained locally for review.</span></div></div>
    {errors.length > 0 && <div className="banner danger"><CircleDot size={17}/><div><strong>Complete the required fields.</strong> {errors.join(', ')}</div></div>}
    <form onSubmit={submit}>
      <section className="form-panel phoenix-form-panel"><div className="panel-title"><div><span>{isNew ? 'CREATE' : 'MAINTAIN'}</span><h3>Record information</h3></div><small>{master.fields.filter((field) => field[3]).length} REQUIRED FIELDS</small></div><div className="form-grid">{master.fields.map((field) => <FormControl key={field[0]} field={field} value={draft[field[0]]} onChange={update}/>)}</div><div className="required-note"><span>*</span> Required for the core setup prototype. Final mandatory and approval rules remain subject to stakeholder validation.</div></section>
      <div className="action-bar"><button type="submit" className="primary-action"><Save/>Save record</button><button type="button" onClick={() => { setDraft(clone(record)); setErrors([]) }}><RotateCcw/>Reset changes</button><button type="button" onClick={onBack}><ArrowLeft/>Cancel</button></div>
    </form>
  </main>
}

export default function PhoenixApp({ onSwitch }) {
  const [data, setData] = useState(loadData)
  const [route, setRoute] = useState({ type: 'home' })
  const [query, setQuery] = useState('')
  const [globalQuery, setGlobalQuery] = useState('')
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [expandedPhase, setExpandedPhase] = useState('')
  const [notice, setNotice] = useState('')
  const activeModule = route.module
  const found = route.master ? findPhoenixMaster(route.master) : null
  const globalResults = useMemo(() => {
    if (!globalQuery.trim()) return []
    const text = globalQuery.toLowerCase()
    return PHOENIX_MODULES.flatMap((module) => module.masters.flatMap((master) => (data[master.id] ?? []).filter((record) => Object.values(record).some((value) => String(value).toLowerCase().includes(text))).map((record) => ({ module, master, record })))).slice(0, 12)
  }, [globalQuery, data])
  const go = (next) => { setRoute(next); setQuery(''); setGlobalQuery(''); setMobileOpen(false); window.scrollTo(0, 0) }
  const save = (masterId, record) => {
    setData((current) => {
      const records = current[masterId] ?? []
      const exists = records.some((item) => item.id === record.id)
      const next = { ...current, [masterId]: exists ? records.map((item) => item.id === record.id ? record : item) : [record, ...records] }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
    setNotice('Record saved in the local Phoenix prototype')
    window.setTimeout(() => setNotice(''), 3200)
    go({ type: 'master', module: route.module, master: masterId })
  }
  const resetDemo = () => {
    const next = buildPhoenixSeed()
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    setData(next)
    setNotice('Synthetic demo data restored')
    window.setTimeout(() => setNotice(''), 3200)
    go({ type: 'home' })
  }
  return <div className={`app phoenix-app ${collapsed ? 'nav-collapsed' : ''}`}>
    {notice && <div className="toast" role="status"><Check size={17}/>{notice}</div>}
    <aside className={mobileOpen ? 'sidebar mobile-open' : 'sidebar'}>
      <div className="brand"><span><Factory/></span>{!collapsed && <div><strong>PHOENIX</strong><small>FOUNDRY ERP</small></div>}<button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X/></button></div>
      <div className="phoenix-overview-nav"><button className={route.type === 'home' ? 'active' : ''} onClick={() => go({ type: 'home' })}><Home/><span>Overview</span></button></div>
      <PhoenixNavigation activeModule={activeModule} expandedPhase={expandedPhase} onExpand={setExpandedPhase} onOpenModule={(module) => go({ type: 'module', module })}/>
      <div className="sidebar-foot"><div className="avatar"><ShieldCheck size={15}/></div>{!collapsed && <div><strong>Phoenix ERP roadmap</strong><small>Core setup available</small></div>}</div>
    </aside>
    <section className="workspace">
      <header className="topbar"><div><button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu/></button><button className="collapse" onClick={() => setCollapsed(!collapsed)} aria-label="Toggle sidebar">{collapsed ? <PanelLeftOpen/> : <PanelLeftClose/>}</button><div className="global-search"><Search/><input value={globalQuery} onChange={(event) => setGlobalQuery(event.target.value)} placeholder="Search Phoenix master records…"/>{globalResults.length > 0 && <div className="search-results">{globalResults.map(({ module, master, record }) => <button key={`${master.id}-${record.id}`} onClick={() => go({ type: 'form', module: module.id, master: master.id, id: record.id })}><div><strong>{record.name || record.code || record.requestedValue}</strong><small>{module.short} · {master.name}</small></div><ChevronRight/></button>)}</div>}</div></div><div className="top-actions"><ApplicationSelect onSwitch={onSwitch}/><div className="plant"><span></span><div><strong>Demo organization</strong><small>Future-state core setup</small></div></div><button className="reset-demo" onClick={resetDemo} title="Restore demo data"><RotateCcw size={16}/></button></div></header>
      {route.type === 'home' ? <Dashboard data={data} onOpenModule={(module) => go({ type: 'module', module })} onOpenMaster={(module, master) => go({ type: 'master', module, master })}/>
        : route.type === 'module' ? <ModulePage module={PHOENIX_MODULES.find((module) => module.id === route.module)} data={data} onBack={() => go({ type: 'home' })} onOpenMaster={(master) => go({ type: 'master', module: route.module, master })}/>
          : route.type === 'master' && found ? <MasterList module={found.module} master={found.master} records={data[found.master.id] ?? []} query={query} onQuery={setQuery} onBack={() => go({ type: 'module', module: found.module.id })} onEdit={(id) => go({ type: 'form', module: found.module.id, master: found.master.id, id })} onCreate={() => go({ type: 'form', module: found.module.id, master: found.master.id, id: 'new' })}/>
            : route.type === 'form' && found ? <MasterForm key={`${found.master.id}-${route.id}`} module={found.module} master={found.master} record={route.id === 'new' ? {} : (data[found.master.id] ?? []).find((item) => item.id === route.id) ?? {}} isNew={route.id === 'new'} onBack={() => go({ type: 'master', module: found.module.id, master: found.master.id })} onSave={(record) => save(found.master.id, record)}/>
              : null}
    </section>
  </div>
}
