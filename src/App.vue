<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <Navbar />
  
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <router-view></router-view>
  </main>

  <Footer></Footer>
</template>