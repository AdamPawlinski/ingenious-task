<template>
  <h2>Select Bus Line</h2>
  <button v-for="line in lines" :key="line" type="button" class="btn btn-primary">{{line}}</button>
</template>
<script setup>
</script>