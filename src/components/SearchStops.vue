<template>
  <div class="stops-search input-group rounded p-2">
    <input v-model="input" type="search" class="form-control rounded-start rounded-1 border-end-0 border" placeholder="Search..." aria-label="Search" aria-describedby="search-addon" />
    <span class="input-group-append border-0">
       <button @click="input" class="btn btn-outline-secondary border-start-0 border rounded-start-0 text-secondary-emphasis bg-transparent" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>
    </span>
  </div>
</template>
<script setup lang="ts">
import { computed, defineProps, defineEmits} from 'vue';
const props = defineProps(['inputModel'])
const emit = defineEmits(['inputModel'])

const input = computed({
  get() {
    return props.inputModel
  },
  set(value) {
    emit('inputModel', value)
  }
})
</script> 