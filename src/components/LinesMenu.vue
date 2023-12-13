<template>
  <h2 class="fs-6 fw-semibold">Select Bus Line</h2> 
  <button v-for="line in lines" :key="line" type="button" @click="onLineClick(line)" :class="['btn btn-primary m-2 px-3 py-2', {'btn-active': route.params.line === line.toString()}]" :aria-pressed="route.params.line === line.toString()">
    {{line}}
  </button>
</template>
<script setup lang="ts">
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute, useRouter } from 'vue-router';

  const store = useStore();
  const route = useRoute();
  const router = useRouter();

  const lines = computed(() => store.getters.getLines);
  const onLineClick = (line: string) => router.push({ name: 'line', params: { line } });
</script>