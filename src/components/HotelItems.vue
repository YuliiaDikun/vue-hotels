<template>
  <li      
    class="bg-white shadow rounded-xl"
  >
    <div class="w-full h-80 overflow-hidden rounded-t-xl">
      <img
        :src="hotel.propertyImage.image.url"
        :alt="hotel.propertyImage.image.description"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="p-3">
      <h3 class="inline-block font-semibold border-b-2 border-purple-300">
        {{ hotel.name }}
      </h3>
      <p class="mb-2">{{ hotel.mapMarker.label }}</p>
      <router-link
        :to="{ name: 'hotelDetails', params: { id: hotel.id } }"
        class="inline-block px-3 py-1 rounded border-2 border-purple-300 hover:bg-purple-300 hover:text-white transition-colors"
        >Learn more</router-link
      >
    </div>
  </li>
</template>

<script setup>

const { hotel } = defineProps({
  hotel: {
    required: true,
    type: Object,
  },
});
</script>