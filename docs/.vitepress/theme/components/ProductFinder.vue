<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { rankedSearch, normalizeSearchText, type RankedResult } from '../../search-engine.mts'
import { searchIndex } from '../../generated-search-index.mts'
import CategoryIcon from './CategoryIcon.vue'

const props = withDefaults(defineProps<{ defaultCategory?: string; showTasks?: boolean; autofocus?: boolean; headingId?: string }>(), {
  showTasks: true,
  autofocus: false,
  headingId: 'product-finder-title'
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
const categories = ['All product areas', ...new Set(searchIndex.map((record) => record.category))]
const audiences = ['All roles', 'Player or member', 'Alliance leader', 'Kingdom manager', 'Minister of Justice', 'Knowledge author or reviewer', 'Reading-session manager']
const types = ['All content types', 'Overview', 'How it works', 'Task guide', 'Algorithm and decision logic', 'Status reference', 'Troubleshooting', 'Role journey']
const levels = ['All levels', 'Beginner', 'Intermediate', 'Advanced']

const roleMatches = (record: RankedResult) => {
  if (audience.value === 'All roles') return true
  const needles: Record<string, string[]> = {
    'Player or member': ['player', 'member', 'all user'],
    'Alliance leader': ['alliance leader', 'co leader', 'alliance manager'],
    'Kingdom manager': ['kingdom manager', 'king', 'kingdom admin'],
    'Minister of Justice': ['minister of justice', 'castle reviewer'],
    'Knowledge author or reviewer': ['knowledge author', 'knowledge reviewer', 'editor'],
    'Reading-session manager': ['reading session manager', 'session manager']
  }
  const haystack = normalizeSearchText(`${record.audience} ${record.title} ${record.category} ${record.aliases.join(' ')}`)
  return needles[audience.value].some((term) => haystack.includes(normalizeSearchText(term)))
}

const results = computed(() => rankedSearch(query.value).filter((record) =>
  (category.value === 'All product areas' || record.category === category.value)
  && roleMatches(record)
  && (contentType.value === 'All content types' || record.contentType === contentType.value)
  && (level.value === 'All levels' || record.level === level.value || record.level === 'All levels')
).slice(0, 12))

const highlightParts = (value: string) => {
  const terms = normalizeSearchText(query.value).split(' ').filter((term) => term.length > 1)
  if (!terms.length) return [{ text: value, match: false }]
  const expression = new RegExp(`(${terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'ig')
  return value.split(expression).filter(Boolean).map((text) => ({ text, match: terms.includes(normalizeSearchText(text)) }))
}

const focus = async () => { await nextTick(); input.value?.focus() }
defineExpose({ focus })
onMounted(() => { if (props.autofocus) void focus() })
</script>

<template>
  <section class="product-finder" :aria-labelledby="headingId">
    <div class="product-finder__heading">
      <div><p class="product-finder__eyebrow">Search tasks, concepts, states, and troubleshooting</p><h2 :id="headingId">I need to...</h2></div>
    </div>
    <label class="product-finder__search">
      <span class="sr-only">Search Kingshot Events documentation</span>
      <input ref="input" v-model="query" type="search" placeholder="Try: duplicate screenshot, castle standby, grant quota..." autocomplete="off" />
    </label>
    <div v-if="showTasks" class="product-finder__tasks" aria-label="Common tasks">
      <a v-for="task in tasks" :key="task[0]" :href="task[1]">{{ task[0] }}</a>
    </div>
    <div class="product-finder__filters" aria-label="Search filters">
      <label>Product area<select v-model="category"><option v-for="item in categories" :key="item">{{ item }}</option></select></label>
      <label>Role or audience<select v-model="audience"><option v-for="item in audiences" :key="item">{{ item }}</option></select></label>
      <label>Content type<select v-model="contentType"><option v-for="item in types" :key="item">{{ item }}</option></select></label>
      <label>Experience level<select v-model="level"><option v-for="item in levels" :key="item">{{ item }}</option></select></label>
    </div>
    <p class="product-finder__count" role="status">{{ results.length }} highest-relevance guides shown</p>
    <div class="product-finder__results">
      <a v-for="result in results" :key="result.path" :href="result.path" class="finder-result" :data-category="result.category">
        <CategoryIcon :category="result.category" size="small" />
        <span class="finder-result__body">
          <strong><template v-for="(part, index) in highlightParts(result.title)" :key="index"><mark v-if="part.match">{{ part.text }}</mark><template v-else>{{ part.text }}</template></template></strong>
          <span><template v-for="(part, index) in highlightParts(result.snippet || result.description)" :key="index"><mark v-if="part.match">{{ part.text }}</mark><template v-else>{{ part.text }}</template></template></span>
          <small>Matched in: {{ result.matchingSection }}</small>
        </span>
        <span class="finder-result__meta"><em>{{ result.category }}</em><em>{{ result.audience }}</em><em>{{ result.contentType }}</em><em>{{ result.level }}</em></span>
      </a>
      <p v-if="!results.length" class="product-finder__empty">No guide matches every filter. Clear one filter or try a shorter phrase; minor spelling errors are supported.</p>
    </div>
  </section>
</template>
