<template>
  <section class="max-w-5xl my-0 mx-auto bg-white border-t-2 border-sky-900">
    <h1 class="text-4xl font-bold mb-5 mt-5 text-sky-900 text-center">
      Your list of favourite hotels
    </h1>
    <div v-if="!hotels.length" class="flex justify-center text-gray-600 p-8">
      You dont have favourites hotels now. Please, add some to your list.
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8 py-4">
      <li
        v-for="hotel of hotels"
        :key="hotel.id"
        :hotel="hotel"
        class="bg-white shadow rounded-xl flex flex-col h-full overflow-hidden"
      >
        <div class="flex flex-col h-full">
          <div class="w-full h-80 overflow-hidden rounded-t-xl">
            <img
              v-if="hotel.propertyImage"
              :src="hotel.propertyImage?.image.url"
              :alt="hotel.propertyImage?.image.description"
              class="object-cover w-full h-full"
            />
            <img
              v-else
              :src="hotel.propertyGallery?.images[0].image.url"
              :alt="hotel.summary?.name"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="px-3 pt-3">
            <h3
              v-if="hotel.name"
              class="inline-block mb-2 font-semibold border-b-2 border-sky-900"
            >
              {{ hotel.name }}
            </h3>
            <h3
              v-else
              class="inline-block mb-2 font-semibold border-b-2 border-sky-900"
            >
              {{ hotel.summary?.name }}
            </h3>
          </div>
          <div class="mt-auto p-3 flex justify-between">
            <router-link
              :to="{ name: 'hotelDetails', params: { id: hotel.id } }"
              class="inline-block mt-auto px-3 py-1 text-sm rounded border-2 border-sky-900 hover:bg-sky-900 hover:text-white transition-colors"
              >Read more</router-link
            >
            <FavouriteBtn
              :hotel="hotel"
              @isLocalStorageUpdated="handleLocalStorage"
            />
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";
import Hotels from "../components/Hotels.vue";
import FavouriteBtn from "../components/FavouriteBtn.vue";
import { getLocalStorage } from "../helpers/localStorage";

const hotels = ref([]);
const message = ref("");

function handleLocalStorage(value) {  
  if (value) {    
    let favHotels = getLocalStorage("favHotels");   
    hotels.value = Object.values(favHotels);  
  }
}

function loadFavouritesFromLocalStorage() {
  let favHotels = getLocalStorage("favHotels");
  favHotels = favHotels ? favHotels : {};
  if (!Object.values(favHotels)) {
    return;
  } else {
    hotels.value = Object.values(favHotels);
  }
}

onMounted(() => {
  loadFavouritesFromLocalStorage();
});
</script>
