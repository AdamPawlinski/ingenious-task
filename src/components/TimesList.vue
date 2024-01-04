<template>
  <div class="container px-0">
    <div v-if="!route.params.line" class="content-wrapper d-flex align-items-center justify-content-center">
      Please select the bus line first
    </div>
    <div v-else-if="!route.params.stop" class="content-wrapper d-flex align-items-center justify-content-center">
      Please select the bus stop first
    </div>
    <div v-else>
      <div class="ms-3 pt-3 fs-6 fw-semibold">Bus Stop: {{ route.params.stop }}</div>
      <div class="list-item border-bottom border-secondary-subtle d-flex align-items-center fw-semibold ps-3">
        Time 
      </div>
    </div>
    <ul class="content-wrapper list-group list-group-flush">
      <li v-for="time in stopTimes" :key="time" class="list-item d-flex align-items-center list-group-item">{{ time }}</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';  
  const store = useStore();
  const route = useRoute();   
  const stopTimes = computed<string | string[]>(() => store.getters.getStopTimes(route.params.stop))
</script>