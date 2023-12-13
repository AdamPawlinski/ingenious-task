<template>
  <div class="container">
    <LinesMenu />
  </div>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col h-100">
        <StopsList />
      </div>
      <div class="col">
        <TimesList />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"> 
  import LinesMenu from './LinesMenu.vue';
  import StopsList from './StopsList.vue';
  import TimesList from './TimesList.vue';

</script>