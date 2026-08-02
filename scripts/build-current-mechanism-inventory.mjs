import fs from 'node:fs'
import path from 'node:path'
import { sourceMechanismCatalog } from '../docs/.vitepress/source-mechanism-catalog.mts'

const root = path.resolve(import.meta.dirname, '..')
const docs = path.join(root, 'docs')
const reports = path.join(root, 'reports')
fs.mkdirSync(reports, { recursive: true })
const normalized = (value) => value.toLocaleLowerCase('en-US').replace(/\s+/g, ' ')

const records = sourceMechanismCatalog.map((item) => {
  const file = path.join(docs, item.docsFile)
  const exists = fs.existsSync(file)
  const body = exists ? normalized(fs.readFileSync(file, 'utf8')) : ''
  const missingEvidence = item.evidenceTerms.filter((term) => !body.includes(normalized(term)))
  return {
    ...item,
    documentationVisibility: 'public',
    completionStatus: !exists ? 'missing' : missingEvidence.length ? 'partial' : 'documented',
    missingEvidence
  }
})

const counts = Object.groupBy(records, (item) => item.completionStatus)
fs.writeFileSync(path.join(reports, 'current-kingshot-events-mechanisms.json'), `${JSON.stringify(records, null, 2)}\n`)
fs.writeFileSync(path.join(reports, 'current-kingshot-events-mechanisms.md'), `# Source-backed Kingshot Events mechanism coverage\n\nThis local, gitignored report maps ${records.length} reader-visible mechanisms to implementation evidence and concrete documentation wording. It does not infer completeness from page length.\n\n- Documented: ${(counts.documented ?? []).length}\n- Partial: ${(counts.partial ?? []).length}\n- Missing: ${(counts.missing ?? []).length}\n\n| ID | Product area | Mechanism | Source evidence | Documentation | Status | Missing evidence |\n| --- | --- | --- | --- | --- | --- | --- |\n${records.map((r) => `| ${r.id} | ${r.productArea} | ${r.mechanismName} | ${r.sourceEvidence} | ${r.docsFile} | ${r.completionStatus} | ${r.missingEvidence.join('; ')} |`).join('\n')}\n`)
console.log(`Source-backed mechanism inventory written: ${records.length} records; ${(counts.documented ?? []).length} documented, ${(counts.partial ?? []).length} partial, ${(counts.missing ?? []).length} missing.`)
if ((counts.partial?.length ?? 0) || (counts.missing?.length ?? 0)) process.exitCode = 1
