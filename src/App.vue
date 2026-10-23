<script setup>
import { RouterView } from 'vue-router'
import NavigateLayout from '@/components/NavigateLayout.vue'
</script>

<template>
    <NavigateLayout v-if="!$route.meta.hideNavbar" />
    <div class="wrapper d-flex flex-column min-vh-100 bg-light" v-if="!$route.meta.hideNavbar">
        <RouterView :key="$route.fullPath"/>
    </div>
    <RouterView v-if="$route.meta.hideNavbar" />

</template>

<style scoped>
/* iOS Safari menghitung 100vh dari tinggi viewport TERBESAR (saat toolbar
   address bar disembunyikan), bukan tinggi yang benar-benar terlihat saat
   toolbar tampil -- beda dengan Android Chrome yang lebih konsisten.
   Akibatnya di iOS bagian bawah halaman bisa ketutup toolbar/home indicator
   atau muncul scroll kosong. 100dvh menghitung tinggi viewport yang
   SEBENARNYA terlihat saat ini, konsisten di iOS maupun Android.
   .wrapper.min-vh-100 dipakai (bukan cuma .wrapper) supaya spesifisitasnya
   mengalahkan .min-vh-100 { min-height: 100vh !important; } bawaan Bootstrap. */
.wrapper.min-vh-100 {
    min-height: 100dvh !important;
}
</style>
