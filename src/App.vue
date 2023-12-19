<template>
    <div class="container bg-transparent">
        <h1 class="fw-semibold fs-4 mt-5">Timetable</h1>
    </div>
    <div class="container mt-3 w-100"><MainMenu /></div>
    <div class="my-3"> 
        <RouterView/>
    </div>    
</template>
<script setup>
    import { useStore } from 'vuex';
    import MainMenu from './layout/MainMenu';
    import { useRoute, RouterView } from 'vue-router';

    const route = useRoute();
    const store = useStore();
    store.dispatch('fetchStopsData');
</script>
