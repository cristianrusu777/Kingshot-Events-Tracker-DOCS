import fs from 'node:fs'
import path from 'node:path'
import { publicationManifest, publishedPages } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const file = path.join(dir, entry.name)
  if (entry.isDirectory() && !['.vitepress', 'node_modules'].includes(entry.name)) return walk(file)
  return entry.isFile() && entry.name.endsWith('.md') ? [file] : []
})
const files = walk(docs).map((file) => path.relative(docs, file).split(path.sep).join('/')).sort()
const registered = publicationManifest.map((entry) => entry.file).sort()
const errors = []
for (const file of files) if (!registered.includes(file)) errors.push(`Unclassified Markdown page: ${file}`)
for (const entry of publicationManifest) {
  if (!files.includes(entry.file)) errors.push(`Manifest entry points to missing page: ${entry.file}`)
  for (const key of ['product','title','path','navigationSection','audience','experienceLevel','featureArea','publicationStatus','sortOrder','lastReviewedDate']) {
    if (entry[key] === undefined || entry[key] === '') errors.push(`Manifest entry ${entry.file} is missing ${key}`)
  }
  if (!['published','draft','archived','redirect'].includes(entry.publicationStatus)) errors.push(`Invalid publication status: ${entry.file}`)
  if (entry.publicationStatus === 'redirect' && !entry.redirectTo) errors.push(`Redirect missing destination: ${entry.file}`)
  if (entry.publicationStatus === 'redirect' && /<script|\bwindow\./i.test(fs.readFileSync(path.join(docs, entry.file), 'utf8'))) errors.push(`Redirect contains browser-only script: ${entry.file}`)
}
const duplicatePaths = publicationManifest.filter((entry, index, all) => all.findIndex((other) => other.path === entry.path) !== index)
if (duplicatePaths.length) errors.push(`Duplicate manifest paths: ${duplicatePaths.map((entry) => entry.path).join(', ')}`)
const duplicateTitles = publishedPages.filter((entry, index, all) => all.findIndex((other) => other.title === entry.title) !== index)
if (duplicateTitles.length) errors.push(`Duplicate published titles: ${duplicateTitles.map((entry) => entry.title).join(', ')}`)
if (publicationManifest.some((entry) => ['draft','archived'].includes(entry.publicationStatus))) errors.push('Draft or archived source is present in the public source tree')
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Publication manifest OK: ${publishedPages.length} published, ${publicationManifest.length - publishedPages.length} redirects, ${files.length} classified Markdown files.`)
