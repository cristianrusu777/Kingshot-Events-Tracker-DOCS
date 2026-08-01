<script setup lang="ts">
const platforms = [{
  name: 'Kingshot Events',
  description: 'Manage scoped player records, events, results, Castle Position workflows, shared knowledge, and planning tools.',
  status: 'Available',
  href: '/kingshot-events/'
}]
</script>

<template>
  <div class="platform-selector" role="list" aria-label="Available Ralyvora platforms">
    <article v-for="platform in platforms" :key="platform.name" class="platform-card" role="listitem">
      <div class="platform-card__mark" aria-hidden="true"><span>K</span></div>
      <div class="platform-card__body">
        <div class="platform-card__meta"><span class="availability-dot" aria-hidden="true"></span>{{ platform.status }}</div>
        <h3>{{ platform.name }}</h3>
        <p>{{ platform.description }}</p>
        <a :href="platform.href" class="platform-card__action">Open documentation <span aria-hidden="true">→</span></a>
      </div>
    </article>
  </div>
</template>
