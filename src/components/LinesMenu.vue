<template>
  <h2 class="pt-4 ps-4 fs-6 fw-semibold">Select Bus Line</h2> 
  <div class="p-4">
    <button v-for="line in lines" :key="line" type="button" @click="onLineClick(line)" :class="['line-button btn btn-primary me-2 px-3 py-2', {'active': route.params.line === line.toString()}]" :aria-pressed="route.params.line === line.toString()">
      {{line}}
    </button>
  </div>
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