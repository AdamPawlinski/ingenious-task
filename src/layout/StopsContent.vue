<template>
  <div class="container">
    <LinesMenu />
  </div>
  <div class="container bg-transparent">
    <div class="row mt-3">
      <div class="col ps-0">
        <StopsList/>
      </div>
      <div class="col pe-0">
        <TimesList class="container"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"> 
  import LinesMenu from '../components/LinesMenu.vue';
  import StopsList from '../components/StopsList.vue';
  import TimesList from '../components/TimesList.vue';

</script>