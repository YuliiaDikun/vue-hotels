<template>
  <li class="bg-white shadow rounded-xl flex flex-col h-full overflow-hidden">
    <div class="flex flex-col h-full">
      <div class="w-full h-80 overflow-hidden rounded-t-xl">
        <img
          :src="hotel.propertyImage.image.url"
          :alt="hotel.propertyImage.image.description"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="px-3">
        <h3 class="inline-block font-semibold border-b-2 border-purple-300">
          {{ hotel.name }}
        </h3>
        <p class="mb-2">{{ hotel.mapMarker.label }}</p>
      </div>
      <div class="mt-auto p-3">
        <router-link
          :to="{ name: 'hotelDetails', params: { id: hotel.id } }"
          class="inline-block mt-auto px-3 py-1 rounded border-2 border-purple-300 hover:bg-purple-300 hover:text-white transition-colors"
          >Read more</router-link
        >
      </div>
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