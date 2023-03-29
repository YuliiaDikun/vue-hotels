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
    <Hotels :hotels="hotels" />
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, onMounted, ref } from "vue";
import hotelInstance from "../service/hotelAPI";
import store from "../store";
import Hotels from "../components/Hotels.vue";

const today = new Date().getDate();
const tomorrow = new Date().getDate() + 1;
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

const NYChotels = ref([]);
const keyword = ref("");
const searchedHotels = computed(() => store.state.searchedHotels);
const hotels = searchedHotels.length > 0 ? searchedHotels : NYChotels;

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
    hotels.value = hotelSearch.data.data.propertySearch.properties;
  } catch (error) {
    console.log(error);
  }
});
</script>
