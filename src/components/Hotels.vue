<template>
  <ul class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 py-4">
    <HotelItems v-for="hotel of hotels" :key="hotel.id" :hotel="hotel" />
  </ul>
  <div v-if="!hotels.length" class="flex justify-center text-gray-600 p-8">
    loading
  </div>
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