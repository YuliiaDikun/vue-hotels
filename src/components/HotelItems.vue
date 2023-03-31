<template>
  <li class="bg-white shadow rounded-xl flex flex-col h-full overflow-hidden">
    <div class="flex flex-col h-full">
      <div class="w-full h-80 overflow-hidden rounded-t-xl">
        <img
          :src="hotel.propertyImage?.image.url"
          :alt="hotel.propertyImage?.image.description"
          class="object-cover w-full h-full"
        />
      </div>
      <div class="px-3 pt-3">
        <h3 class="mb-2 font-semibold border-b-2 border-sky-900">
          {{ hotel.name }}
        </h3>
        <p class="mb-2">Price: <strong>{{ hotel.mapMarker?.label }}</strong></p>
      </div>
      <div class="mt-auto p-3 flex justify-between">
        <router-link
          :to="{ name: 'hotelDetails', params: { id: hotel.id } }"
          class="inline-block mt-auto text-sm px-3 py-1 rounded border-2 border-sky-900 hover:bg-sky-900 hover:text-white transition-colors"
          >Read more</router-link
        >
        <FavouriteBtn :hotel="hotel"/>
      </div>
    </div>
  </li>
</template>

<script setup>
import FavouriteBtn from '../components/FavouriteBtn.vue';

const { hotel } = defineProps({
  hotel: {
    required: true,
    type: Object,
  },
});
</script>