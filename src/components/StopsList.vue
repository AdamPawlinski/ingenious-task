<template>
  <div class="h-100 d-flex align-items-center justify-content-center" v-if="!route.params.line">
    Please select the bus line first
  </div>
  <div v-if="route.params.line">Bus Line: {{ route.params.line }}</div>
  <ul class="list-group list-group-flush">
    <li v-for="stop in lineStops" :key="stop" role="button" class="list-group-item  list-group-item-action" @click="onStopClick(stop)">{{ stop }}</li>
  </ul>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';

  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  
  const lineStops = computed(() => store.getters.getLineStops(parseInt(route.params.line as string)))
  const onStopClick = (stop: string) => router.push({ name: 'time', params: { line: route.params.line, stop } });
</script>