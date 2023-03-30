<template>
  <section class="max-w-5xl my-0 mx-auto">
    <h1 class="text-4xl font-bold mb-5 mt-5 text-orange-500 text-center">
      Your list of favourite hotels
    </h1>
    <p>{{ message }}</p>
    <Hotels :hotels="hotels" />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Hotels from "../components/Hotels.vue";
import { getLocalStorage } from "../helpers/localStorage";

const hotels = ref([]);
const message = ref("");

onMounted(() => {
  let favHotels = getLocalStorage("favHotels");
  favHotels = favHotels ? favHotels : {};
  if (!Object.values(favHotels)) {
    message.value =
      "You dont have favourites hotels now. Please, add some to your list.";
  } else {
    hotels.value = Object.values(favHotels);
  }
});
</script>
