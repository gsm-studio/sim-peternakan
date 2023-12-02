<script setup>
import { RouterView } from 'vue-router'
import NavigateLayout from './components/NavigateLayout.vue'
</script>

<template>
    <NavigateLayout />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light">
        <RouterView />
    </div>
</template>

<style scoped>

</style>
