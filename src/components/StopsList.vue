<template>
  <ul class="list-group list-group-flush">
    <li v-for="stop in lineStops" :key="stop" class="list-group-item" @click="onStopClick">{{ stop }}</li>
  </ul>
</template>
<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

  const lineStops = computed((line) => store.getters.getLineStops(line))
  
  const onStopClick = () => {
    // add route change to show times and pass the param with the stop
  }
</script>