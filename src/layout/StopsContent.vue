<template>
  <div class="container">
    <LinesMenu />
  </div>
  <div class="container bg-transparent">
    <div class="content-container">
      <div class="content-container-lines">
        <StopsList/>
      </div>
      <div class="content-container-stops">
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