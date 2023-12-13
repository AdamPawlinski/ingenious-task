<template>
  <div class="container px-0">
    <div class="content-wrapper d-flex align-items-center justify-content-center" v-if="!route.params.line">
      Please select the bus line first
    </div>
    <div class="ms-3 pt-3 fs-6 fw-semibold" v-if="route.params.line">Bus Line: {{ route.params.line }}</div>
    <div class="list-item border-bottom border-secondary-subtle d-flex align-items-center ps-3">
      Bus Stops 
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-expand ms-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
      </svg>
    </div>
    <ul class="content-wrapper list-group list-group-flush">
      <li v-for="stop in lineStops" :key="stop" role="button" class="list-item d-flex align-items-center list-group-item list-group-item-action" @click="onStopClick(stop)">{{ stop }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';

  const store = useStore();
  const route = useRoute();
  const router = useRouter();
  
  const lineStops = computed(() => store.getters.getLineStops(parseInt(route.params.line as string)))
  const onStopClick = (stop: string) => router.push({ name: 'time', params: { stop } });
</script>