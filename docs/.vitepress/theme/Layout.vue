<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { computed, onBeforeUnmount, onMounted } from 'vue'
import { useData } from 'vitepress'
import { publishedPages } from '../publication-manifest.mts'
import { categoryIcons } from '../category-icons.mts'
import CategoryIcon from './components/CategoryIcon.vue'
import GlobalDocSearch from './components/GlobalDocSearch.vue'

const { page } = useData()
const record = computed(() => publishedPages.find((item: any) => item.file === page.value.relativePath))
const category = computed(() => {
  const value = record.value?.navigationSection ?? ''
  if (value === 'Kingdoms and Alliances') return 'Scopes and Communities'
  if (value === 'Subscriptions') return 'Subscriptions and Usage'
  return value
})
const categoryLanding: Record<string, string | null> = {
  'Overview': '/kingshot-events/',
  'Getting Started': '/kingshot-events/getting-started/',
  'Accounts and Access': '/kingshot-events/accounts-and-access/',
  'Kingdoms and Alliances': '/kingshot-events/scopes-and-communities/',
  'Scopes and Communities': '/kingshot-events/scopes-and-communities/',
  'Players': '/kingshot-events/players/',
  'Events and Results': '/kingshot-events/events/',
  'Imports and Data Entry': '/kingshot-events/imports/',
  'Analytics and Rewards': '/kingshot-events/analytics/',
  'Castle Positions': '/kingshot-events/castle-positions/',
  'Knowledge Hub': '/kingshot-events/knowledge-hub/',
  'Simulations and Optimizations': '/kingshot-events/lab/',
  'Subscriptions': '/kingshot-events/subscriptions/',
  'Subscriptions and Usage': '/kingshot-events/subscriptions/',
  'Troubleshooting': '/kingshot-events/troubleshooting/',
  'Platform Lifecycles': null,
  'Role Journeys': null,
  'Updates': null
}
const categoryPath = computed(() => {
  const target = categoryLanding[record.value?.navigationSection ?? ''] ?? null
  return target && target !== record.value?.path ? target : null
})

let sidebarObserver: MutationObserver | undefined
const sidebarCategory: Record<string, string> = { 'Shared Lifecycles': 'Platform Lifecycles' }
const decorateSidebar = () => {
  document.querySelectorAll('.VPSidebarItem.level-0 .text').forEach((label) => {
    if (label.querySelector('.sidebar-category-icon')) return
    const title = label.textContent?.trim() ?? ''
    const definition = categoryIcons[sidebarCategory[title] ?? title]
    if (!definition) return
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    icon.setAttribute('viewBox', '0 0 24 24'); icon.setAttribute('aria-hidden', 'true'); icon.classList.add('sidebar-category-icon')
    for (const d of definition.paths) { const path = document.createElementNS('http://www.w3.org/2000/svg', 'path'); path.setAttribute('d', d); icon.appendChild(path) }
    label.prepend(icon)
  })
}
onMounted(() => { decorateSidebar(); sidebarObserver = new MutationObserver(decorateSidebar); sidebarObserver.observe(document.body, { childList: true, subtree: true }) })
onBeforeUnmount(() => sidebarObserver?.disconnect())
</script>

<template>
  <DefaultTheme.Layout>
    <template #nav-bar-content-before><GlobalDocSearch /></template>
    <template #doc-before>
      <div v-if="record?.product === 'kingshot-events'" class="page-context" :data-category="category">
        <nav class="docs-breadcrumbs" aria-label="Breadcrumb">
          <a href="/">Ralyvora Docs</a><span aria-hidden="true">/</span>
          <a href="/kingshot-events/">Kingshot Events</a><span aria-hidden="true">/</span>
          <a v-if="categoryPath" :href="categoryPath">{{ category }}</a>
          <span v-else>{{ category }}</span><span aria-hidden="true">/</span>
          <span aria-current="page">{{ record.title }}</span>
        </nav>
        <div class="page-context__badges" aria-label="Guide metadata">
          <span class="page-context__category"><CategoryIcon :category="category" size="small" />{{ category }}</span>
          <span>{{ record.audience }}</span>
          <span>{{ record.experienceLevel }}</span>
          <span>{{ /troubleshooting/.test(record.path) ? 'Troubleshooting' : /role-journeys/.test(record.path) ? 'Role journey' : 'Product guide' }}</span>
        </div>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
