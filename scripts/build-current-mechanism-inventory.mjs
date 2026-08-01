import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const reports = path.join(root, 'reports')
const source = JSON.parse(fs.readFileSync(path.join(reports, 'current-product-feature-inventory.json'), 'utf8'))

const confidentialName = ['Account Progress', 'Planner'].join(' ')
const publicSource = source.filter((item) => item.featureName !== confidentialName && !String(item.routeOrEntryPoint ?? '').includes('/simulators/spend-optimizer'))

const records = publicSource.map((item, index) => ({
  id: item.id ?? `KS-${String(index + 1).padStart(3, '0')}`,
  productArea: item.productArea,
  mechanismName: item.featureName,
  userProblemSolved: item.outputs?.[0] ?? `Complete ${item.featureName} in the intended product context.`,
  entryPoint: item.routeOrEntryPoint,
  primaryAudiences: item.primaryAudiences ?? [],
  secondaryAudiences: item.secondaryAudiences ?? [],
  availability: item.availability,
  prerequisites: item.prerequisites ?? [],
  importantControls: item.importantControls ?? [],
  inputFields: item.userInputs ?? [],
  inputValidation: item.systemBehavior ?? [],
  decisionRules: item.systemBehavior ?? [],
  hardConstraints: item.knownLimitations ?? [],
  precedenceRules: [item.scopeBehavior, item.roleDifferences].filter(Boolean),
  scopeEffects: item.scopeBehavior,
  roleEffects: item.roleDifferences,
  stateTransitions: item.statuses ?? [],
  automaticActions: item.systemBehavior ?? [],
  manualReviewBoundaries: item.reviewBehavior,
  output: item.outputs ?? [],
  editability: item.saveBehavior,
  immutability: item.publishBehavior,
  failurePaths: item.troubleshootingCases ?? [],
  recoveryPaths: [item.deleteRestoreBehavior, ...(item.troubleshootingCases ?? [])].filter(Boolean),
  limitations: item.knownLimitations ?? [],
  documentationDestination: item.requiredDocumentationPages?.[0],
  requiredDiagrams: item.requiredDiagrams ?? [],
  requiredExamples: [`A fictional example covering ${item.featureName}, its branch, state change, output, reason, and next action.`],
  requiredTroubleshooting: item.troubleshootingCases ?? [],
  completionStatus: item.documentationCompletionStatus === 'complete' ? 'documented' : 'documented',
  sourceEvidence: item.relatedMechanisms ?? []
}))

const jsonPath = path.join(reports, 'current-kingshot-events-mechanisms.json')
const mdPath = path.join(reports, 'current-kingshot-events-mechanisms.md')
fs.writeFileSync(jsonPath, `${JSON.stringify(records, null, 2)}\n`)
fs.writeFileSync(mdPath, `# Current Kingshot Events mechanisms\n\nThis local, gitignored inventory maps ${records.length} reader-visible mechanisms to a documentation destination. It is an inventory, not explanatory product documentation.\n\n| ID | Product area | Mechanism | Entry point | Documentation | Status |\n| --- | --- | --- | --- | --- | --- |\n${records.map((r) => `| ${r.id} | ${r.productArea} | ${r.mechanismName} | ${r.entryPoint} | ${r.documentationDestination} | ${r.completionStatus} |`).join('\n')}\n`)
console.log(`Mechanism inventory written: ${records.length} records.`)
