import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { buildModel, buildYesModel, findMenuLevel, flattenMenu, parseCatalogue } from '../src/catalog.js'
import { parseLocation, toPath } from '../src/routes.js'

const root = path.resolve(import.meta.dirname, '..')
const catalogue = await readFile(path.join(root, 'public/data/SUN_Foundry_Legacy_Application_Screen_Catalog.md'), 'utf8')
const source = JSON.parse(await readFile(path.join(root, 'public/data/legacy_source.json'), 'utf8'))
const ids = [...catalogue.matchAll(/^### (LEG-\d{3})/gm)].map((match) => match[1])
const screenshotRefs = [...catalogue.matchAll(/^- \*\*Screenshot:\*\* `([^`]+)`/gm)].map((match) => match[1])

async function walk(folder) {
  const result = []
  for (const name of await readdir(folder)) {
    const item = path.join(folder, name)
    if ((await stat(item)).isDirectory()) result.push(...await walk(item))
    else result.push(item)
  }
  return result
}

const errors = []
const fail = (message) => errors.push(message)

// 1. Screenshot evidence
const imagesRoot = path.join(root, 'public/legacy-screens')
const images = (await walk(imagesRoot)).filter((file) => /\.png$/i.test(file))
const missing = screenshotRefs.filter((relative) => !images.some((file) => path.normalize(file).endsWith(path.normalize(relative))))
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index)
if (ids.length !== 208 || screenshotRefs.length !== 208 || images.length !== 208) fail(`Expected 208 screens/screenshots, found ${ids.length}/${screenshotRefs.length}/${images.length}`)
if (duplicateIds.length) fail(`Duplicate LEG ids: ${duplicateIds.join(', ')}`)
if (missing.length) fail(`Missing screenshot assets:\n${missing.join('\n')}`)

// 2. Every LEG id is represented exactly once, as a legacy form screen or a legacy menu
const represented = [...source.screens.flatMap((screen) => screen.legIds), ...source.navigationLegIds]
const repeated = represented.filter((id, index) => represented.indexOf(id) !== index)
const unrepresented = ids.filter((id) => !represented.includes(id))
if (repeated.length) fail(`LEG ids represented more than once: ${[...new Set(repeated)].join(', ')}`)
if (unrepresented.length) fail(`LEG ids not represented: ${unrepresented.join(', ')}`)

// 3. Model integrity
const model = buildModel(parseCatalogue(catalogue), source)
const screenIds = new Set(Object.keys(model.screens))
const menuTargets = model.modules.flatMap((module) => flattenMenu(module.options).map(({ option }) => ({ module: module.module, option })))
for (const { module, option } of menuTargets) {
  if (option.screenId && !screenIds.has(option.screenId)) fail(`${module} menu ${option.code} targets unknown screen ${option.screenId}`)
  // Oracle Forms module names are case-insensitive (e.g. DESPINVOICEprd and DESPINVOICEPRD are the same form).
  if (option.screenId && model.screens[option.screenId].formName?.toLowerCase() !== option.formName?.toLowerCase()) fail(`${module} menu ${option.code} (${option.formName}) opens ${option.screenId} (${model.screens[option.screenId].formName})`)
}
const reachable = new Set(menuTargets.map(({ option }) => option.screenId).filter(Boolean))
for (const id of screenIds) if (!reachable.has(id)) fail(`Screen ${id} is not reachable from any legacy menu`)

const TYPES = new Set(['text', 'number', 'date', 'password', 'select'])
let fieldCount = 0
let requiredCount = 0
for (const screen of Object.values(model.screens)) {
  if (!['present', 'fallback', 'missing'].includes(screen.sourceStatus)) fail(`${screen.id} has invalid sourceStatus ${screen.sourceStatus}`)
  if (screen.sourceStatus !== 'missing' && !screen.formFile) fail(`${screen.id} is verified but has no legacy form file`)
  for (const field of screen.fields) {
    if (field.kind === 'heading') continue
    fieldCount += 1
    if (!TYPES.has(field.type)) fail(`${screen.id} field "${field.label}" has invalid type ${field.type}`)
    if (field.type === 'select' && !(field.options?.length >= 2)) fail(`${screen.id} field "${field.label}" is a list without legacy values`)
    if (!field.evidence?.length) fail(`${screen.id} field "${field.label}" has no evidence`)
    if (field.required) {
      requiredCount += 1
      if (!field.requiredEvidence) fail(`${screen.id} field "${field.label}" is required without legacy evidence`)
      if (screen.sourceStatus === 'missing') fail(`${screen.id} field "${field.label}" is required on an unverified screen`)
    }
  }
}

console.log(`Catalogue screens: ${ids.length}`)
console.log(`Screenshot assets: ${images.length}`)
console.log(`Legacy forms: ${screenIds.size} (navigation screenshots: ${source.navigationLegIds.length})`)
console.log(`Menu options: ${menuTargets.length}, with screens: ${menuTargets.filter(({ option }) => option.screenId).length}`)
console.log(`Source-backed fields: ${fieldCount}, required with evidence: ${requiredCount}`)

// 4. YES’s Foundry (screenshots + discovery workbook)
const yesItems = JSON.parse(await readFile(path.join(root, 'public/data/yes-screens.json'), 'utf8'))
const yesImages = new Set((await readdir(path.join(root, 'public/yes-screens'))).filter((name) => /\.png$/i.test(name)))
const yesRefs = new Set(yesItems.flatMap((item) => [item.screenshot, ...(item.screenshots ?? [])]).filter(Boolean))
for (const ref of yesRefs) if (!yesImages.has(ref)) fail(`YES’s screenshot missing: ${ref}`)
for (const image of yesImages) if (!yesRefs.has(image)) fail(`YES’s screenshot not referenced by any screen: ${image}`)
const yesModel = buildYesModel(yesItems)
const yesReachable = new Set(yesModel.modules.flatMap((module) => flattenMenu(module.options).map(({ option }) => option.screenId)).filter(Boolean))
for (const screen of Object.values(yesModel.screens)) {
  if (!yesReachable.has(screen.id)) fail(`YES’s screen ${screen.id} (${screen.menuLabel}) is not reachable from its menu`)
  for (const field of screen.fields) if (field.required && !field.requiredEvidence) fail(`YES’s ${screen.id} field "${field.label}" is required without evidence`)
}
const yesCovered = new Set(Object.values(yesModel.screens).flatMap((screen) => screen.legIds))
for (const item of yesItems) {
  if (item.module === 'Main Screen') continue
  const covered = yesCovered.has(item.id) || (item.consolidatedInto && yesCovered.has(item.consolidatedInto))
  if (!covered) fail(`YES’s entry ${item.id} (${item.title}) is not represented`)
}
console.log(`YES’s: ${yesItems.length} entries, ${Object.keys(yesModel.screens).length} screens, ${yesImages.size} screenshots`)

// 5. URLs: every screen and menu level of both applications round-trips through its /sun or /yes path
let routeCount = 0
const sameRoute = (a, b) => JSON.stringify(a) === JSON.stringify(b)
for (const [application, appModel] of [['sun', model], ['yes', yesModel]]) {
  const check = (route, label) => {
    const path = toPath(application, route)
    const parsed = parseLocation(path)
    if (parsed.application !== application || !sameRoute(parsed.route, route) || !parsed.canonical) fail(`URL ${path} does not round-trip for ${label}`)
    routeCount += 1
  }
  check({ type: 'home' }, `${application} home`)
  for (const id of Object.keys(appModel.screens)) check({ type: 'screen', id }, id)
  for (const module of appModel.modules) {
    check({ type: 'module', module: module.module, path: [] }, module.module)
    for (const { option, trail } of flattenMenu(module.options)) {
      if (!option.children?.length) continue
      const path = [...trail, option.code]
      check({ type: 'module', module: module.module, path }, `${module.module}/${path.join('/')}`)
      if (findMenuLevel(module, path).node?.code !== option.code) fail(`Menu path ${path.join('/')} in ${module.module} does not resolve`)
    }
  }
}
if (parseLocation('/').application !== 'sun' || parseLocation('/').canonical) fail('Root URL should redirect to /sun')
console.log(`URLs: ${routeCount} screen and menu routes round-trip`)

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join('\n- ')}`)
  process.exit(1)
}
console.log('Coverage check passed: all 208 legacy screenshots are represented and the source model is consistent.')
