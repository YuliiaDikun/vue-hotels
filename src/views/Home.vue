<template>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for Cities"
    />

    <div class="flex gap-1"></div>
  </div>
</template>

<script setup>
import axios from "axios";
import { computed, onMounted } from "vue";
import hotelInstance from "../service/hotelAPI";

const today = new Date().getDate();
const tomorrow = new Date().getDate() + 1;
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

onMounted(async () => {
  try {
    const { data } = await hotelInstance.get(
      "/locations/search?query=New%20York"
    );
    const locationId = data.trackingID;
    const config = {
        destination: {
          regionId: locationId,
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
     
    const hotelSearch = await hotelInstance.post("/properties/v2/list", config);
    const hotels =  hotelSearch.data.propertySearch.properties;
   
  } catch (error) {
    console.log(error);
  }
});
</script>
