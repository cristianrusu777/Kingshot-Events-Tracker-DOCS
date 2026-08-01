import fs from 'node:fs'
import path from 'node:path'
import { publishedPages } from '../docs/.vitepress/publication-manifest.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const rules = [
  ['private filesystem path', /(?:[A-Z]:\\(?:Users|var|srv)|\/home\/|\/var\/www\/)/i],
  ['implementation framework', /\b(?:Prisma|TypeScript symbol|controller class|repository interface|migration timestamp)\b/i],
  ['deployment internals', /\b(?:Dockerfile|docker-compose|Caddyfile|VPS path|environment variable)\b/i],
  ['raw permission key', /\b[a-z][a-z-]+:[a-z][a-z:-]+\b/],
  ['secret-like assignment', /\b(?:api[_-]?key|secret|password|token)\s*[:=]\s*[A-Za-z0-9_\-]{12,}/i],
  ['private endpoint', /\/(?:api|internal|admin-api)\/[A-Za-z0-9_\-/{}/]+/i],
  ['test documentation', /\b(?:manual QA|test plan|test fixture|integration test)\b/i]
]
const errors = []
for (const entry of publishedPages) {
  const source = fs.readFileSync(path.join(docs, entry.file), 'utf8')
  for (const [label, pattern] of rules) if (pattern.test(source)) errors.push(`${entry.file}: possible ${label}`)
}
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Leak audit OK: ${publishedPages.length} published pages scanned.`)
