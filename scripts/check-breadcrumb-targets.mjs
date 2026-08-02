import fs from 'node:fs'
import path from 'node:path'
import { publishedPages } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const layout = fs.readFileSync(path.join(root, 'docs/.vitepress/theme/Layout.vue'), 'utf8')
const block = /const categoryLanding[^=]*=\s*\{([\s\S]*?)\n\}/.exec(layout)?.[1] ?? ''
const targets = [...block.matchAll(/:\s*'([^']+)'/g)].map((match) => match[1])
const published = new Set(publishedPages.map((page) => page.path.replace(/\/$/, '') || '/'))
const errors = targets.filter((target) => !published.has(target.replace(/\/$/, '') || '/')).map((target) => `Breadcrumb target is not published: ${target}`)
if (!/const target = categoryLanding\[record\.value\?\.navigationSection \?\? ''\] \?\? null/.test(layout)) errors.push('Breadcrumbs must use the explicit category landing map, not derive targets from path segments.')
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Breadcrumb target check OK: ${targets.length} explicit links resolve to published pages; unmapped categories render as text.`)
