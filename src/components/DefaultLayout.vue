<template>
  <div class="bg-gray-100 min-h-screen">
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