import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
const checks = [
  'audit-documentation-inventory.mjs', 'audit-documentation-semantic-coverage.mjs', 'check-publication-manifest.mjs',
  'check-doc-links.mjs', 'check-doc-images.mjs', 'check-doc-content.mjs',
  'audit-documentation-depth.mjs', 'audit-diagram-coverage.mjs',
  'audit-visual-distinction.mjs', 'audit-documentation-leaks.mjs'
]
for (const check of checks) {
  const result = spawnSync(process.execPath, [fileURLToPath(new URL(check, import.meta.url))], { stdio: 'inherit' })
  if (result.status !== 0) process.exit(result.status ?? 1)
}
console.log('Documentation audit complete.')
