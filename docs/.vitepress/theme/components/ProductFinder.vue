<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { publishedPages } from '../../publication-manifest.mts'

const props = defineProps<{ defaultCategory?: string }>()

type FinderRecord = {
  title: string; path: string; category: string; audience: string; level: string
  type: string; description: string; terms: string[]; matchingSection: string
}

const categoryAliases: Record<string, string[]> = {
  'Players': ['player', 'governor', 'roster', 'nickname', 'kick player', 'player missing'],
  'Events and Results': ['event occurrence', 'event instance', 'event date', 'same date', 'locked event'],
  'Imports and Data Entry': ['screenshot import', 'ocr import', 'duplicate screenshot', 'correct imported rows', 'partial extraction'],
  'Analytics and Rewards': ['war room', 'analytics empty', 'reward not eligible', 'shared analytics', 'granted analytics'],
  'Castle Positions': ['castle appointment', 'castle standby', 'planner conflict', 'applicant', 'schedule row full'],
  'Knowledge Hub': ['article locked', 'reading code', 'reading verification', 'browser translation', 'knowledge studio'],
  'Simulations and Optimizations': ['lab', 'hero gear', 'governor gear', 'chief gear', 'charm', 'bear joiners', 'autosave', 'profile autosave'],
  'Subscriptions and Usage': ['premium access', 'grant quota', 'limited mode', 'allocation', 'subscription grant'],
  'Platform Lifecycles': ['deleted', 'removed', 'recycle bin', 'restore', 'notifications', 'reports'],
  'Scopes and Communities': ['kingdom', 'server', 'alliance', 'tenant scope', 'active scope'],
  'Accounts and Access': ['login', 'registration', 'role', 'approval', 'linked account'],
  'Troubleshooting': ['error', 'missing', 'disabled', 'not saved', 'cannot find']
}

const descriptions: Record<string, string> = {
  '/kingshot-events/scopes-and-communities/hierarchy-and-switching': 'How server, kingdom, alliance, membership, management, roles, and grants resolve into visible actions.',
  '/kingshot-events/players/profile-and-history': 'Identity layers, synchronization precedence, activity state, nickname history, removal, and restoration.',
  '/kingshot-events/events/record-batches-and-corrections': 'Event instances, same-date identity, record batches, locks, corrections, and history.',
  '/kingshot-events/imports/row-statuses-and-decisions': 'The extraction, matching, duplicate, review, apply, rollback, and recovery pipeline.',
  '/kingshot-events/analytics/reward-rules': 'How scoped result records become analytics totals, eligibility decisions, reward reasons, and recalculated output.',
  '/kingshot-events/castle-positions/planner-controls': 'Candidate filtering, suggestion order, conflicts, standby, locks, draft planning, and publication.',
  '/kingshot-events/knowledge-hub/reading-sessions': 'Article access, publication revisions, browser translation assistance, and Reading Verification flows.',
  '/kingshot-events/lab/profiles-and-autosave': 'Active Lab profiles, shared inputs, debounced autosave, stale-write protection, and optimizer execution.',
  '/kingshot-events/lab/bear-trap': 'Bear Trap inputs, evidence classes, calculation stages, estimated damage, score, and uncertainty.',
  '/kingshot-events/subscriptions/plans-and-effective-access': 'Effective access from direct plans, kingdom plans, accepted grants, allocations, quotas, and limited mode.'
}

const inferType = (path: string, title: string) => {
  if (path.includes('/troubleshooting/')) return 'Troubleshooting'
  if (path.includes('/role-journeys/')) return 'Role journey'
  if (/logic|decision|aggregation|resolution|precedence/i.test(title)) return 'Algorithm and decision logic'
  if (/status|terminology|availability|reference/i.test(title)) return 'Status reference'
  if (/overview|kingshot events|problems/i.test(title)) return 'Overview'
  if (/adding|entering|reviewing|working|first visit|applicant|authoring/i.test(title)) return 'Task guide'
  return 'How it works'
}

const normalizeCategory = (page: any) => {
  const section = page.navigationSection
  if (section === 'Kingdoms and Alliances') return 'Scopes and Communities'
  if (section === 'Subscriptions') return 'Subscriptions and Usage'
  return section
}

const records: FinderRecord[] = publishedPages
  .filter((page: any) => page.product === 'kingshot-events')
  .map((page: any) => {
    const category = normalizeCategory(page)
    const type = inferType(page.path, page.title)
    const terms = [page.title, page.featureArea, page.audience, page.experienceLevel, ...(categoryAliases[category] ?? [])]
    return {
      title: page.title,
      path: page.path || '/kingshot-events/',
      category,
      audience: page.audience,
      level: page.experienceLevel,
      type,
      description: descriptions[page.path] ?? `${type} for ${page.featureArea.toLowerCase()}, including scope, states, decisions, output, and recovery.` ,
      terms,
      matchingSection: /troubleshooting/i.test(type) ? 'Symptoms and safe recovery' : /logic|decision/i.test(type) ? 'Decision order and worked example' : 'Purpose, workflow, and next actions'
    }
  })

const tasks = [
  ['Add or update a player', '/kingshot-events/players/manage-players'],
  ['Link a game profile', '/kingshot-events/players/linking-and-sync'],
  ['Record event results', '/kingshot-events/events/manual-entry'],
  ['Import a screenshot', '/kingshot-events/imports/screenshot-import'],
  ['Correct imported rows', '/kingshot-events/imports/row-statuses-and-decisions'],
  ['Review analytics', '/kingshot-events/analytics/activity-and-results'],
  ['Configure reward rules', '/kingshot-events/analytics/reward-rules'],
  ['Apply for a Castle Position', '/kingshot-events/castle-positions/applicant-guide'],
  ['Review applicants', '/kingshot-events/castle-positions/review-workflow'],
  ['Build and publish a schedule', '/kingshot-events/castle-positions/planner-controls'],
  ['Read a scoped article', '/kingshot-events/knowledge-hub/access-and-translation'],
  ['Create and publish an article', '/kingshot-events/knowledge-hub/authoring-and-publication'],
  ['Create a Reading Verification session', '/kingshot-events/knowledge-hub/reading-sessions'],
  ['Use a saved Lab profile', '/kingshot-events/lab/profiles-and-autosave'],
  ['Optimize Hero Gear', '/kingshot-events/lab/hero-gear'],
  ['Configure a Bear Trap rally', '/kingshot-events/lab/bear-trap'],
  ['Understand premium access', '/kingshot-events/subscriptions/plans-and-effective-access'],
  ['Restore deleted information', '/kingshot-events/lifecycles/recycle-bin-and-restore-requests']
]

const query = ref('')
const category = ref(props.defaultCategory ?? 'All product areas')
const audience = ref('All roles')
const contentType = ref('All content types')
const level = ref('All levels')
const input = ref<HTMLInputElement | null>(null)
const categories = ['All product areas', ...new Set(records.map(r => r.category))]
const audiences = ['All roles', 'Player or member', 'Alliance leader', 'Kingdom manager', 'Minister of Justice', 'Knowledge author or reviewer', 'Reading-session manager']
const types = ['All content types', 'Overview', 'How it works', 'Task guide', 'Algorithm and decision logic', 'Status reference', 'Troubleshooting', 'Role journey']
const levels = ['All levels', 'Beginner', 'Intermediate', 'Advanced']

const roleMatches = (record: FinderRecord) => {
  if (audience.value === 'All roles') return true
  const needles: Record<string, string[]> = {
    'Player or member': ['player', 'member', 'all user'],
    'Alliance leader': ['alliance', 'leader', 'manager'],
    'Kingdom manager': ['king', 'kingdom', 'manager'],
    'Minister of Justice': ['minister', 'king', 'castle'],
    'Knowledge author or reviewer': ['author', 'reviewer', 'knowledge'],
    'Reading-session manager': ['session', 'author', 'manager']
  }
  const haystack = `${record.audience} ${record.title} ${record.category}`.toLowerCase()
  return needles[audience.value].some(term => haystack.includes(term))
}

const results = computed(() => {
  const needle = query.value.trim().toLowerCase()
  return records.filter(record => {
    const haystack = [record.title, record.description, record.category, record.type, record.matchingSection, ...record.terms].join(' ').toLowerCase()
    return (!needle || haystack.includes(needle))
      && (category.value === 'All product areas' || record.category === category.value)
      && roleMatches(record)
      && (contentType.value === 'All content types' || record.type === contentType.value)
      && (level.value === 'All levels' || record.level === level.value || record.level === 'All levels')
  }).slice(0, 12)
})

const onShortcut = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault(); input.value?.focus()
  }
}
onMounted(() => window.addEventListener('keydown', onShortcut))
onBeforeUnmount(() => window.removeEventListener('keydown', onShortcut))
</script>

<template>
  <section class="product-finder" aria-labelledby="product-finder-title">
    <div class="product-finder__heading">
      <div><p class="product-finder__eyebrow">Find a task or mechanism</p><h2 id="product-finder-title">I need to...</h2></div>
      <kbd>Ctrl / ⌘ + K</kbd>
    </div>
    <label class="product-finder__search">
      <span class="sr-only">Search Kingshot Events documentation</span>
      <input ref="input" v-model="query" type="search" placeholder="Try: duplicate screenshot, castle standby, grant quota..." />
    </label>
    <div class="product-finder__tasks" aria-label="Common tasks">
      <a v-for="task in tasks" :key="task[0]" :href="task[1]">{{ task[0] }}</a>
    </div>
    <div class="product-finder__filters" aria-label="Search filters">
      <label>Product area<select v-model="category"><option v-for="item in categories" :key="item">{{ item }}</option></select></label>
      <label>Role or audience<select v-model="audience"><option v-for="item in audiences" :key="item">{{ item }}</option></select></label>
      <label>Content type<select v-model="contentType"><option v-for="item in types" :key="item">{{ item }}</option></select></label>
      <label>Experience level<select v-model="level"><option v-for="item in levels" :key="item">{{ item }}</option></select></label>
    </div>
    <p class="product-finder__count" role="status">{{ results.length }} matching guides shown</p>
    <div class="product-finder__results">
      <a v-for="result in results" :key="result.path" :href="result.path" class="finder-result" :data-category="result.category">
        <span class="finder-result__icon" aria-hidden="true"></span>
        <span class="finder-result__body"><strong>{{ result.title }}</strong><span>{{ result.description }}</span><small>Matching section: {{ result.matchingSection }}</small></span>
        <span class="finder-result__meta"><em>{{ result.category }}</em><em>{{ result.audience }}</em><em>{{ result.type }}</em><em>{{ result.level }}</em></span>
      </a>
      <p v-if="!results.length" class="product-finder__empty">No guide matches every filter. Clear one filter or try a product term shown in the interface.</p>
    </div>
  </section>
</template>
