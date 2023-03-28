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
const today = new Date();

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
          day: today.getDate(),
          month: today.getMonth(),
          year: today.getFullYear(),
        },
        checkOutDate: {
          day: today.getDate() + 1,
          month: today.getMonth(),
          year: today.getFullYear(),
        },
        rooms: [{ adults: 1, children: [] }],
      };
    //   console.log(config);
    // const hotelSearch = await hotelInstance.post("/properties/v2/list", {
    //  data: config,
    // });
    // console.log(hotelSearch);
    const options = {
      method: "POST",
      url: "https://hotels4.p.rapidapi.com/properties/v2/list",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a6755868dbmshd7a202f66255226p14af0bjsnfb31ddde1f36",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com",
      },
      data: JSON.stringify(config),
    };
    const res = await axios.request(options);
  } catch (error) {
    console.log(error);
  }
});
</script>
