<script setup lang="ts">
import { computed } from 'vue'
import { iconForCategory } from '../../category-icons.mts'
const props = withDefaults(defineProps<{ category: string; size?: 'small' | 'medium' | 'large' }>(), { size: 'medium' })
const definition = computed(() => iconForCategory(props.category))
</script>
<template>
  <span class="category-icon" :class="`category-icon--${size}`" :data-category="category" aria-hidden="true">
    <svg viewBox="0 0 24 24" focusable="false"><path v-for="path in definition.paths" :key="path" :d="path" /></svg>
  </span>
</template>
