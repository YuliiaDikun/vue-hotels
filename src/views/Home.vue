<template>
  <section class="max-w-5xl my-0 mx-auto pb-12">
    <div class="flex pb-0 justify-center my-8">
      <input
        v-model="keyword"
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        placeholder="Where are you going?"
        @change="searchHotels"
      />
    </div>
    <Hotels :hotels="hotelPerPage" />
    <button
      @click="loadMoreHotels"
      v-show="isNextPageExist"
      class="block mx-auto my-4 border-2 rounded text-bold border-white text-white text-lg px-4 py-2 hover:text-gray-800 hover:border-gray-100 hover:bg-gray-100 transition-colors"
    >
      Load more
    </button>

    <div v-if="!hotels.length" class="flex justify-center text-gray-600 p-8">
      loading...
    </div>
  </section>
</template>

<script setup>
import { getHotelsList } from "../helpers/getHotelsList";
import { computed, onMounted, ref } from "vue";

import Hotels from "../components/Hotels.vue";

const hotels = ref([]);
const hotelPerPage = ref([]);
const keyword = ref("");
const isNextPageExist = ref(false);

let page = 1;
const PER_PAGE = 9;
const TOTAL_PAGE = ref(null);

function loadMoreHotels() {
  page++;
  isNextPageExist.value = TOTAL_PAGE.value <= page ? false : true;

  const offset = PER_PAGE * page - PER_PAGE;

  const lastInx = offset + PER_PAGE;

  hotelPerPage.value = [
    ...hotelPerPage.value,
    ...hotels.value.slice(offset, lastInx),
  ];
}

async function searchHotels() {
  if (!keyword.value) {
    hotels.value = await getHotelsList();
  } else {
    hotels.value = await getHotelsList(keyword.value);
  }
  hotelPerPage.value = hotels.value.slice(0, PER_PAGE);
  TOTAL_PAGE.value = Math.ceil(hotels.value.length / PER_PAGE);

  isNextPageExist.value = TOTAL_PAGE.value > 1 ? true : false;
}

onMounted(async () => {
  hotels.value = await getHotelsList();

  hotelPerPage.value = hotels.value.slice(0, PER_PAGE);
  TOTAL_PAGE.value = Math.ceil(hotels.value.length / PER_PAGE);

  isNextPageExist.value = TOTAL_PAGE.value > 1 ? true : false;
});
</script>
