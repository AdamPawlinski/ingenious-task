<template>
  <div class="row">
    <div class="col">
      <StopsList />
    </div>
    <div class="col">
      <TimesList />
    </div>
  </div>
  <div class="row"><AllStopsList /></div>
</template>
<script setup>
  import { AllStopsList } from './AllStopsList';
  import { StopsList } from './StopsList';
  import { TimesList } from './TimesList'
</script>