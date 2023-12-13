<template>
  <div class="input-group rounded">
    <input v-model="input" type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
    <span class="input-group-text border-0" id="search-addon">
      <i class="fas fa-search"></i>
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