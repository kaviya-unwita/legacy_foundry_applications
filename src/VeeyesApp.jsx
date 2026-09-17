import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, BookOpen, Check, ChevronRight, Database, Factory, FileText, Home, Image, LayoutGrid, Menu, PanelLeftClose, PanelLeftOpen, RotateCcw, Save, Search, Settings, TriangleAlert, X } from 'lucide-react'

const MODULES = ['Foundry Application', 'Inventory Management', 'Customer Complaints', 'Calibration', 'Maintenance', 'Financial Accounts', 'Radiography', 'NABL']
const HIERARCHY = {
  'Foundry Application': ['Masters', 'Marketing Management', 'Order Processing', 'Production Planning', 'Quality Information', 'lab', 'Sales Information', 'Pattern', 'Subcontract', 'On Screen Queries', 'Enquiries', 'Heat History', 'System', 'Utilities', 'Export', 'Methods', 'Radiography - Foundry', 'Temporary Update screens'],
  'Inventory Management': ['Masters', 'Purchase', 'Goods Receipt', 'Issues', 'General', 'Reports'],
  'Customer Complaints': ['Entries & Reports'], Calibration: ['Entries & Reports'], Maintenance: ['Entries & Reports'],
  'Financial Accounts': ['Masters', 'Vouchers', 'Ledgers', 'Postings', 'Reports', 'Ratio & Interest calc', 'Utility'],
  Radiography: ['RT Masters', 'MIS Reports', 'Inventory stores', 'Radiography', 'System'], NABL: ['Masters', 'Lab'],
}
const ICONS = [Factory, Database, TriangleAlert, Settings, Settings, FileText, Image, BookOpen]
const imageUrl = (name) => `/veeyes-screens/${name.split('\\').map(encodeURIComponent).join('/')}`
const fieldType = (name) => /date/i.test(name) ? 'date' : /qty|quantity|weight|rate|amount|value|days|number|\bno\b|\bwt\b/i.test(name) ? 'number' : /email/i.test(name) ? 'email' : 'text'
const readDraft = (id) => { try { return JSON.parse(localStorage.getItem(`veeyes:${id}`)) || {} } catch { return {} } }

function VeeyesHome({ screens, onOpen }) {
  const available = screens.filter((screen) => !screen.consolidatedInto && screen.screenshot).length
  const fields = screens.reduce((count, screen) => count + (screen.fields?.length || 0), 0)
  return <main className="content dashboard">
    <section className="hero"><div><span className="eyebrow">VEEYES ALLOYS · LEGACY ERP</span><h1>Veeyes legacy replica</h1><p>Menu hierarchy follows the discovery workbook; forms retain their supplied screenshot evidence.</p></div><div className="hero-mark"><Factory/><span>VEEYES<br/>ERP</span></div></section>
    <section className="stats"><article><span className="stat-icon teal"><LayoutGrid/></span><div><strong>{available}</strong><p>Captured screens</p></div></article><article><span className="stat-icon gold"><Database/></span><div><strong>{fields}</strong><p>Captured controls</p></div></article><article><span className="stat-icon blue"><Image/></span><div><strong>75</strong><p>Screenshot assets</p></div></article><article><span className="stat-icon green"><Check/></span><div><strong>Workbook</strong><p>Primary discovery source</p></div></article></section>
    <div className="section-title"><div><span>LEGACY HOME PAGE</span><h2>Application modules</h2></div><small>8 MODULES</small></div>
    <section className="module-grid">{MODULES.map((module,index)=>{const Icon=ICONS[index];return <button className="module-card" key={module} onClick={()=>onOpen(module)}><span className="module-icon"><Icon/></span><div><h3>{module}</h3><p>{HIERARCHY[module].length} submodules</p></div><ChevronRight/></button>})}</section>
  </main>
}

function VeeyesMenu({ module, submodule, screens, onSubmodule, onScreen, onBack }) {
  const options = submodule
    ? (module === 'Foundry Application' && submodule === 'Masters' ? [...new Set(screens.filter(s=>s.module==='Foundry Application'&&!s.consolidatedInto).map(s=>s.title))] : [])
    : HIERARCHY[module]
  return <main className="content"><button className="back-link" onClick={onBack}><ArrowLeft size={17}/> {submodule ? module : 'Dashboard'}</button>
    <div className="page-heading"><div><span className="eyebrow">VEEYES LEGACY MENU</span><h1>{submodule || module}</h1><p>{submodule ? `${module} / ${submodule}` : 'Names and order follow the Veeyes discovery workbook.'}</p></div><div className="count-badge">{options.length}<small>OPTIONS</small></div></div>
    <section className="option-grid">{options.map((option,index)=><button key={option} onClick={()=>submodule?onScreen(screens.find(s=>!s.consolidatedInto&&s.title===option)):onSubmodule(option)}><span>{String(index+1).padStart(2,'0')}</span><strong>{option}</strong><ChevronRight size={19}/></button>)}</section>
    {!options.length&&<section className="form-panel empty"><BookOpen/><h3>Screens not yet supplied</h3><p>This menu is documented in the discovery workbook, but detailed screenshots were not supplied.</p></section>}
  </main>
}

function VeeyesScreen({ screen, onBack }) {
  const [values,setValues]=useState(()=>readDraft(screen.id)); const [showLegacy,setShowLegacy]=useState(false); const [notice,setNotice]=useState('')
  const screenshots=screen.screenshots?.length?screen.screenshots:screen.screenshot?[screen.screenshot]:[]
  const save=()=>{localStorage.setItem(`veeyes:${screen.id}`,JSON.stringify(values));setNotice('Saved locally (no database connected)');setTimeout(()=>setNotice(''),2500)}
  return <main className="content screen-page">{notice&&<div className="toast"><Check size={17}/>{notice}</div>}
    <div className="screen-toolbar"><button className="back-link" onClick={onBack}><ArrowLeft size={17}/> Masters</button>{screenshots.length>0&&<button className={showLegacy?'tool active':'tool'} onClick={()=>setShowLegacy(!showLegacy)}><Image size={17}/> Legacy reference</button>}</div>
    <header className="form-heading"><div><div className="form-meta"><small>{screen.type}</small><small>{screen.source}</small></div><h1>{screen.title}</h1><p>{screen.purpose}</p></div><span className="module-tag">VEEYES</span></header>
    {screen.availability==='not-supplied'&&<div className="banner warn"><TriangleAlert size={17}/><div><strong>Documented screen — screenshot not supplied.</strong> Fields and behavior have not been invented.</div></div>}
    {showLegacy&&screenshots.length>0&&<section className="legacy-reference"><div className="panel-title"><div><span>SOURCE EVIDENCE</span><h3>Legacy screenshot comparison</h3></div><small>{screenshots.length} CAPTURE(S)</small></div><div className="reference-grid">{screenshots.map(name=><img key={name} src={imageUrl(name)} alt={`${screen.title} legacy screen`}/>)}</div></section>}
    <section className="form-panel"><div className="panel-title"><div><span>WORKBOOK FIELD REGISTER</span><h3>Record information</h3></div><small>MANDATORY STATUS UNKNOWN</small></div>
      {screen.fields?.length?<div className="form-grid">{screen.fields.map((field,index)=><label className="field" key={`${field}-${index}`}><span>{field}</span><div className="input-wrap"><input type={fieldType(field)} value={values[field]??''} onChange={e=>setValues(v=>({...v,[field]:e.target.value}))}/></div></label>)}</div>:<div className="empty"><BookOpen/><h3>No verified fields available</h3><p>Awaiting additional screenshot or application evidence.</p></div>}
      <div className="required-note">No required stars are shown because the workbook records mandatory status as Unknown.</div>
    </section>
    {screen.fields?.length>0&&<div className="action-bar"><button className="primary-action" onClick={save}><Save/>Save local draft</button><button onClick={()=>setValues({})}><RotateCcw/>Clear</button></div>}
  </main>
}

export default function VeeyesApp({ onSwitch }) {
  const [screens,setScreens]=useState([]);const [error,setError]=useState('');const [route,setRoute]=useState({type:'home'});const [query,setQuery]=useState('');const [collapsed,setCollapsed]=useState(false);const [mobileOpen,setMobileOpen]=useState(false)
  useEffect(()=>{fetch('/data/veeyes-screens.json').then(r=>{if(!r.ok)throw new Error(`Veeyes registry could not be loaded (${r.status})`);return r.json()}).then(setScreens).catch(e=>setError(e.message))},[])
  const results=useMemo(()=>query.trim()?screens.filter(s=>!s.consolidatedInto&&`${s.title} ${(s.fields||[]).join(' ')}`.toLowerCase().includes(query.toLowerCase())).slice(0,12):[],[query,screens])
  const go=next=>{setRoute(next);setQuery('');setMobileOpen(false);window.scrollTo(0,0)}
  if(error)return <div className="fatal"><Factory/><h1>Unable to open Veeyes ERP</h1><p>{error}</p></div>
  const selected=route.type==='screen'?screens.find(s=>s.id===route.id):null
  return <div className={`app ${collapsed?'nav-collapsed':''}`}><aside className={mobileOpen?'sidebar mobile-open':'sidebar'}><div className="brand"><span><Factory/></span>{!collapsed&&<div><strong>VEEYES</strong><small>LEGACY ERP</small></div>}<button className="mobile-close" onClick={()=>setMobileOpen(false)}><X/></button></div><nav><button className={route.type==='home'?'active':''} onClick={()=>go({type:'home'})}><Home/><span>Overview</span></button><p>MODULES</p>{MODULES.map((module,index)=>{const Icon=ICONS[index];return <button key={module} className={route.module===module?'active':''} onClick={()=>go({type:'module',module})}><Icon/><span>{module}</span><small>{HIERARCHY[module].length}</small></button>})}</nav></aside>
    <section className="workspace"><header className="topbar"><div><button className="mobile-menu" onClick={()=>setMobileOpen(true)}><Menu/></button><button className="collapse" onClick={()=>setCollapsed(!collapsed)}>{collapsed?<PanelLeftOpen/>:<PanelLeftClose/>}</button><div className="global-search"><Search/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Veeyes screens and fields…"/>{results.length>0&&<div className="search-results">{results.map(s=><button key={s.id} onClick={()=>go({type:'screen',id:s.id,module:s.module,submodule:s.submodule})}><div><strong>{s.title}</strong><small>{s.fields.length} controls</small></div><ChevronRight/></button>)}</div>}</div></div><div className="top-actions"><div className="application-context"><span>APPLICATION</span><select className="app-switcher" value="veeyes" onChange={e=>onSwitch(e.target.value)}><option value="ssa">SSA Foundry</option><option value="veeyes">Veeyes ERP</option></select></div><div className="plant"><span></span><div><strong>Veeyes Plant 2</strong><small>Screenshot-backed replica</small></div></div></div></header>
      {!screens.length?<div className="loading"><Factory/><p>Loading Veeyes screens…</p></div>:route.type==='home'?<VeeyesHome screens={screens} onOpen={module=>go({type:'module',module})}/>:route.type==='module'?<VeeyesMenu module={route.module} submodule={route.submodule} screens={screens} onSubmodule={submodule=>go({type:'module',module:route.module,submodule})} onScreen={screen=>screen&&go({type:'screen',id:screen.id,module:route.module,submodule:route.submodule})} onBack={()=>route.submodule?go({type:'module',module:route.module}):go({type:'home'})}/>:selected?<VeeyesScreen screen={selected} onBack={()=>go({type:'module',module:selected.module,submodule:selected.submodule})}/>:null}
    </section></div>
}