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
import { getHotelsList } from "../helpers/getHotelsList";
import { computed, onMounted, ref } from "vue";

import Hotels from "../components/Hotels.vue";

const hotels = ref([]);
const keyword = ref("");

async function searchHotels() {
  if (!keyword.value) {
    hotels.value = await getHotelsList();
  } else {
    hotels.value = await getHotelsList(keyword.value);   
  }
}

onMounted(async () => {
  hotels.value = await getHotelsList();
});
</script>
