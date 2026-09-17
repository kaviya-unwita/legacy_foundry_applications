import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { buildModel, buildVeeyesModel, flattenMenu, parseCatalogue } from '../src/catalog.js'

const root = path.resolve(import.meta.dirname, '..')
const catalogue = await readFile(path.join(root, 'public/data/SSA_Foundry_Legacy_Application_Screen_Catalog.md'), 'utf8')
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

// 4. Veeyes ERP (screenshots + discovery workbook)
const veeyesItems = JSON.parse(await readFile(path.join(root, 'public/data/veeyes-screens.json'), 'utf8'))
const veeyesImages = new Set((await readdir(path.join(root, 'public/veeyes-screens'))).filter((name) => /\.png$/i.test(name)))
const veeyesRefs = new Set(veeyesItems.flatMap((item) => [item.screenshot, ...(item.screenshots ?? [])]).filter(Boolean))
for (const ref of veeyesRefs) if (!veeyesImages.has(ref)) fail(`Veeyes screenshot missing: ${ref}`)
for (const image of veeyesImages) if (!veeyesRefs.has(image)) fail(`Veeyes screenshot not referenced by any screen: ${image}`)
const veeyes = buildVeeyesModel(veeyesItems)
const veeyesReachable = new Set(veeyes.modules.flatMap((module) => flattenMenu(module.options).map(({ option }) => option.screenId)).filter(Boolean))
for (const screen of Object.values(veeyes.screens)) {
  if (!veeyesReachable.has(screen.id)) fail(`Veeyes screen ${screen.id} (${screen.menuLabel}) is not reachable from its menu`)
  for (const field of screen.fields) if (field.required && !field.requiredEvidence) fail(`Veeyes ${screen.id} field "${field.label}" is required without evidence`)
}
const veeyesCovered = new Set(Object.values(veeyes.screens).flatMap((screen) => screen.legIds))
for (const item of veeyesItems) {
  if (item.module === 'Main Screen') continue
  const covered = veeyesCovered.has(item.id) || (item.consolidatedInto && veeyesCovered.has(item.consolidatedInto))
  if (!covered) fail(`Veeyes entry ${item.id} (${item.title}) is not represented`)
}
console.log(`Veeyes: ${veeyesItems.length} entries, ${Object.keys(veeyes.screens).length} screens, ${veeyesImages.size} screenshots`)

if (errors.length) {
  console.error(`\n${errors.length} problem(s):\n- ${errors.join('\n- ')}`)
  process.exit(1)
}
console.log('Coverage check passed: all 208 legacy screenshots are represented and the source model is consistent.')
