<template>
  <SearchStops @inputModel="autocompleteHandler" />
  <ul class="list-group list-group-flush">
    <li v-for="stopItem in (results || allStops)" :key="stopItem.stop" class="list-group-item">
      <span v-if="!results" class="fw-normal">{{stopItem}}</span>
      <template v-else>
        <span class="fw-bold">{{ stopItem.highlight }}</span>
        <span>{{ stopItem.rest }}</span>
      </template>
    </li>
  </ul>
</template>
<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { useStore } from 'vuex';
  import SearchStops from './SearchStops.vue';

  const store = useStore();
  const allStops = computed(() => store.getters.getStops)
  const results = ref();

  const autocompleteHandler = (phrase: string) => {
    results.value = allStops.value
    .filter((stop: string) => stop.toLowerCase().startsWith(phrase.toLowerCase()))
    .map((stop: string) => {
      const highlight = stop.substring(0, phrase.length);
      const rest = stop.substring(phrase.length);
      return { highlight, rest, stop };
    });
  }
</script>