<template>
  <div class="bg-gradient-to-b from-[#141E30] to-[#243B55] min-h-screen">
    <navbar/>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './NavBar.vue'
</script>

<style>

</style>