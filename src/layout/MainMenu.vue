<template>
  <header class="ps-4">
    <nav>
      <ul class="nav nav-underline">
        <li class="nav-item ">
          <RouterLink :class="['h-100 d-flex align-items-center tab-menu nav-link fs-6 fw-medium', {'active border-bottom border-2 border-primary': route.path.match(routeRegex)}]" to="/">Bus Lines</RouterLink>
        </li>
        <li class="nav-item main-menu">
          <RouterLink :class="['h-100 d-flex align-items-center tab-menu nav-link fs-6 fw-medium', {'active border-bottom border-2 border-primary': route.path === '/stops'}]" to="/stops">Stops</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup lang="ts">
  import { RouterLink, useRoute } from 'vue-router';
  const route = useRoute();
  const routeRegex = /(\/lines\/.*)|(\/$)/;
</script>