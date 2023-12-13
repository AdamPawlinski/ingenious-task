<template>
  <header class="main-menu p-4">
    <nav>
      <ul class="nav nav-underline">
        <li class="nav-item">
          <RouterLink :class="['nav-link text-black fs-6 fw-medium', {'active': route.path === '/' || route.path === '/lines/:line'}]" to="/">Bus Lines</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :class="['nav-link text-black fs-6 fw-medium', {'active': route.path === '/stops'}]" to="/stops">Stops</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { RouterLink, useRoute } from 'vue-router';
  const route = useRoute();
</script>