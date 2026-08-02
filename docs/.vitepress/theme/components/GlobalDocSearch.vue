<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import ProductFinder from './ProductFinder.vue'

const open = ref(false)
const finder = ref<InstanceType<typeof ProductFinder> | null>(null)
const show = async () => { open.value = true; await nextTick(); await finder.value?.focus() }
const close = () => { open.value = false }
const onKey = (event: KeyboardEvent) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); void show() }
  if (event.key === 'Escape' && open.value) close()
}
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <button class="global-doc-search__trigger" type="button" aria-label="Search documentation" @click="show">
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>
    <span>Search</span><kbd>Ctrl K</kbd>
  </button>
  <Teleport to="body">
    <div v-if="open" class="global-doc-search" role="presentation" @click.self="close">
      <section class="global-doc-search__dialog" role="dialog" aria-modal="true" aria-label="Search Ralyvora documentation">
        <button class="global-doc-search__close" type="button" aria-label="Close search" @click="close">×</button>
        <ProductFinder ref="finder" :show-tasks="false" autofocus heading-id="global-product-finder-title" />
      </section>
    </div>
  </Teleport>
</template>
