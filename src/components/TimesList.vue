<template>
  <ul class="list-group list-group-flush">
    <li v-for="time in stopTimes" :key="time" class="list-group-item">{{ time }}</li>
  </ul>
</template>
<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();  

  const stopTimes = computed((stop) => store.getters.getStopTimes(stop))
</script>