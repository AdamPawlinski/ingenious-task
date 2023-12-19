<template>
  <div class="container px-0">
    <SearchStops v-model="searchValue" />
    <div v-if="route.params.stop" class="list-item border-bottom border-secondary-subtle d-flex align-items-center ps-3">
      Bus Stops 
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-chevron-expand ms-2" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z"/>
      </svg>
    </div>
    <ul class="list-group list-group-flush">
      <li v-for="stopItem in (results || allStops)" :key="stopItem.stop" class="list-item d-flex align-items-center list-group-item">
        <span v-if="!results" class="fw-normal">{{stopItem}}</span>
        <template v-else>
          <span >{{ stopItem.highlight }}</span>
          <span>{{ stopItem.rest }}</span>
        </template>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
  import { computed, ref, watch } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';
  import SearchStops from './SearchStops.vue';

  const store = useStore();
  const route = useRoute();
  const allStops = computed(() => store.getters.getStops)
  const results = ref();
  const searchValue = ref('');

  watch(searchValue, (searchValue: string) => {
    results.value = allStops.value
    .filter((stop: string) => stop.toLowerCase().startsWith(searchValue.toLowerCase()))
    .map((stop: string) => {
      const highlight = stop.substring(0, searchValue.length);
      const rest = stop.substring(searchValue.length);
      return { highlight, rest, stop };
    });
  })
</script>