<template>
  <div class="d-flex align-items-center justify-content-center" v-if="!route.params.stop">
    Please select the bus stop first
  </div>
  <div v-if="route.params.stop">Bus Stop: {{ route.params.stop }}</div>
  <ul class="list-group list-group-flush">
    <li v-for="time in stopTimes" :key="time" class="list-group-item">{{ time }}</li>
  </ul>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';  
  const store = useStore();
  const route = useRoute();   
  const stopTimes = computed(() => store.getters.getStopTimes(route.params.stop))
</script>