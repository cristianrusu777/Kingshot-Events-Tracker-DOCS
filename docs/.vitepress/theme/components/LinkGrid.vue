<script setup lang="ts">
defineProps<{ items: Array<{ title: string; description: string; href: string }> }>()
</script>
<template>
  <div class="link-grid">
    <a v-for="item in items" :key="item.href" :href="item.href" class="link-card">
      <strong>{{ item.title }}</strong><span>{{ item.description }}</span><em aria-hidden="true">Explore →</em>
    </a>
  </div>
</template>
