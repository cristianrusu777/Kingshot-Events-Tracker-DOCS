import fs from 'node:fs'
import path from 'node:path'
import { sourceMechanismCatalog } from '../docs/.vitepress/source-mechanism-catalog.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const errors = []
const normalize = (value) => value.toLocaleLowerCase('en-US').replace(/\s+/g, ' ')
const files = new Map()

for (const item of sourceMechanismCatalog) {
  if (!/^SRC-\d{3}$/.test(item.id)) errors.push(`${item.id}: invalid stable mechanism ID`)
  if (!item.sourceEvidence?.trim()) errors.push(`${item.id}: missing implementation evidence`)
  if (!item.evidenceTerms?.length) errors.push(`${item.id}: missing documentation evidence terms`)
  const absolute = path.join(docs, item.docsFile)
  if (!fs.existsSync(absolute)) { errors.push(`${item.id}: missing guide ${item.docsFile}`); continue }
  const source = files.get(absolute) ?? fs.readFileSync(absolute, 'utf8')
  files.set(absolute, source)
  for (const term of item.evidenceTerms) if (!normalize(source).includes(normalize(term))) errors.push(`${item.id}: ${item.docsFile} lacks evidence “${term}”`)
  if (!/^verifiedAgainstSourceCommit: '[0-9a-f]{40}'$/m.test(source)) errors.push(`${item.docsFile}: missing 40-character source commit provenance`)
  if (!/^sourceVerificationOwner: '.+'$/m.test(source)) errors.push(`${item.docsFile}: missing source verification owner`)
}

const duplicateIds = sourceMechanismCatalog.filter((item, index, all) => all.findIndex((other) => other.id === item.id) !== index)
if (duplicateIds.length) errors.push(`duplicate mechanism IDs: ${duplicateIds.map((item) => item.id).join(', ')}`)
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log(`Source mechanism coverage OK: ${sourceMechanismCatalog.length} mechanisms linked to implementation evidence and verified guide text.`)
