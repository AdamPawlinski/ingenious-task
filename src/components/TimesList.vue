<template>
  <div class="container px-0">
    <div class="content-wrapper d-flex align-items-center justify-content-center" v-if="!route.params.stop">
      Please select the bus stop first
    </div>
    <div class="ms-3 pt-3 fs-6 fw-semibold" v-if="route.params.stop">Bus Stop: {{ route.params.stop }}</div>
    <div class="list-item border-bottom border-secondary-subtle d-flex align-items-center ps-3">
      Time 
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
  const stopTimes = computed(() => store.getters.getStopTimes(route.params.stop))
</script>