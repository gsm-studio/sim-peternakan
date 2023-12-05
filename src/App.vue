<script setup>
import { RouterView } from 'vue-router'
import NavigateLayout from '@/components/NavigateLayout.vue'
</script>

<template>
    <NavigateLayout v-if="!$route.meta.hideNavbar" />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light" v-if="!$route.meta.hideNavbar">
        <RouterView />
    </div>
    <RouterView  v-if="$route.meta.hideNavbar" />

</template>

<style scoped>

</style>
