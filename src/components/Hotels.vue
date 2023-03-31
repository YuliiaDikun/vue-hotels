<template>
  <ul class="grid grid-cols-1 md:grid-cols-3 gap-5">
    <HotelItems v-for="hotel of hotels" :key="hotel.id" :hotel="hotel" />
  </ul>  
</template>

<script setup>
import HotelItems from './HotelItems.vue';

const { hotels } = defineProps({
  hotels: {
    required: true,
    type: Array,
  }
  
})
</script>