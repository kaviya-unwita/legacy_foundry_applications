import { readFile, readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const catalogue = await readFile(path.join(root, 'public/data/SSA_Foundry_Legacy_Application_Screen_Catalog.md'), 'utf8')
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

const imagesRoot = path.join(root, 'public/legacy-screens')
const images = (await walk(imagesRoot)).filter((file) => /\.png$/i.test(file))
const missing = screenshotRefs.filter((relative) => !images.some((file) => path.normalize(file).endsWith(path.normalize(relative))))
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index)

console.log(`Catalogue screens: ${ids.length}`)
console.log(`Screenshot references: ${screenshotRefs.length}`)
console.log(`Screenshot assets: ${images.length}`)
console.log(`Duplicate IDs: ${duplicateIds.length}`)
console.log(`Missing screenshot assets: ${missing.length}`)

if (ids.length !== 208 || screenshotRefs.length !== 208 || images.length !== 208 || duplicateIds.length || missing.length) {
  if (missing.length) console.error(missing.join('\n'))
  process.exit(1)
}

console.log('Coverage check passed: all 208 legacy screens are represented.')
