<template>
    <div class="container">
        <h1 class="container fw-semibold fs-4 mt-5">Timetable</h1>
    </div>
    <div class="container mt-3"><MainMenu /></div>
    <div class="container mt-3"> 
        <RouterView/>
    </div>    
</template>
<script setup>
    import './assets/styles.scss';
    import { useStore } from 'vuex';
    import MainMenu from './components/MainMenu';
    import { useRoute, RouterView } from 'vue-router';

    const route = useRoute();
    const store = useStore();
    store.dispatch('fetchStopsData');
</script>
