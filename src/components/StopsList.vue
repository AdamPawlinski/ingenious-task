<template>
  <div class="container px-0">
    <div v-if="!route.params.line" class="content-wrapper d-flex align-items-center justify-content-center">
      Please select the bus line first
    </div>
    <div v-else>
      <div class="ms-3 pt-3 fs-6 fw-semibold">Bus Line: {{ route.params.line }}</div>
      <div class="list-item border-bottom border-secondary-subtle d-flex align-items-center fw-semibold ps-3">
        Bus Stops 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4L10.5 7H5.5L8 4ZM8 12L10.5 9H5.5L8 12Z" fill="#9A9DA4"/>
        </svg>
      </div>
    </div>
    <ul class="content-wrapper list-group list-group-flush">
      <li v-for="stop in lineStops" :key="stop" role="button" :class="['list-item d-flex align-items-center list-group-item list-group-item-action', {'stop-active': route.params.stop === stop}]" @click="onStopClick(stop)">{{ stop }}</li>
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
  
  const lineStops = computed<string[]>(() => store.getters.getLineStops(parseInt(route.params.line as string)))
  const onStopClick = (stop: string) => router.push({ name: 'time', params: { stop } });
</script>