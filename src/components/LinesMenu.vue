<template>
  <h2>Select Bus Line</h2>
  <button v-for="line in lines" :key="line" type="button" class="btn btn-primary" @click="onLineClick">{{line}}</button>
</template>
<script setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();

  const lines = computed(() => store.getters.getLines)

  const onLineClick = () => {
    // add route change and pass param with line to lineStops
  }
</script>