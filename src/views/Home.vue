<template>
  <div class="max-w-5xl my-0 mx-auto">
    <div class="flex p-8 pb-0 justify-center">
    <input
      v-model="keyword"
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Where are you going?"
      @change="searchHotels"
    />  
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div v-for="hotel of searchedHotels" :key="hotel.id" class="bg-white shadow rounded-xl" >
        <div class="w-full h-80 overflow-hidden  rounded-t-xl">
          <img :src="hotel.propertyImage.image.url" :alt="hotel.propertyImage.image.description" class="object-cover w-full h-full">
        </div>
        <div class="p-3">
          <h3 class="inline-block font-semibold border-b-2 border-purple-300">{{hotel.name}}</h3>
        <p class="mb-2">{{hotel.mapMarker.label}}</p>
        <router-link :to="{name: 'hotelDetails', params: { id: hotel.id} }" class="inline-block px-3 py-1 rounded border-2 border-purple-300 hover:bg-purple-300 hover:text-white transition-colors
        ">Learn more</router-link>
        </div>
      </div>
   </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import hotelInstance from "../service/hotelAPI";
import store from "../store";

const today = new Date().getDate();
const tomorrow = new Date().getDate() + 1;
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();


const keyword = ref("");
const searchedHotels = computed(() => store.state.searchedHotels);

function searchHotels() {
  store.dispatch("searchHotels", keyword.value);
}

onMounted(async () => {
  try {
    const config = {
      destination: {
        regionId: "228d3ad890ba4cb2b48050ec9b2c8035",
      },
      checkInDate: {
        day: today,
        month: month,
        year: year,
      },
      checkOutDate: {
        day: tomorrow,
        month: month,
        year: year,
      },
      rooms: [{ adults: 1, children: [] }],
    };

    const hotelSearch = await hotelInstance.post("properties/v2/list", config);
    const hotels = hotelSearch.data.data.propertySearch.properties;
    console.log(hotels);
  } catch (error) {
    console.log(error);
  }
});
</script>
