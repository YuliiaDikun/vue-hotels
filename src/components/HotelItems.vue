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
        <h3 class="inline-block font-semibold border-b-2 border-purple-300">
          {{ hotel.name }}
        </h3>
        <p class="mb-2">{{ hotel.mapMarker?.label }}</p>
      </div>
      <div class="mt-auto p-3 flex justify-between">
        <router-link
          :to="{ name: 'hotelDetails', params: { id: hotel.id } }"
          class="inline-block mt-auto px-3 py-1 rounded border-2 border-purple-300 hover:bg-purple-300 hover:text-white transition-colors"
          >Read more</router-link
        >
        <button
          @click="setHotelToLocalStorage"
          class="inline-block mt-auto px-3 py-1 rounded border-2 border-purple-300 hover:bg-purple-300 hover:text-white transition-colors"
        >
         {{favBtnText}}
        </button>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref } from "vue";
import { getLocalStorage, setLocalStorage } from "../helpers/localStorage";

let isFavBtnToggled = ref(false);
let favBtnText = ref("Add to favourites");
function setHotelToLocalStorage() {
  isFavBtnToggled.value = !isFavBtnToggled.value;
console.log(isFavBtnToggled.value);
  favBtnText.value = isFavBtnToggled.value
    ? "Added to favourites"
    : "Add to favourites";

  let favHotels = getLocalStorage("favHotels");
  favHotels = favHotels ? favHotels : {};

  if (!Object.keys(favHotels).length) {
    favHotels[hotel.id] = hotel;
    setLocalStorage("favHotels", favHotels);
    console.log("Success! The hotel has been added to your favourites.");
  } else {
    const favHotelsId = Object.keys(favHotels);
    if (favHotelsId.includes(String(hotel.id))) {
      delete favHotels[hotel.id];
      setLocalStorage("favHotels", favHotels);
      console.log("Success! The hotel has been deleted from your favourites.");
    } else {
      favHotels[hotel.id] = hotel;
      setLocalStorage("favHotels", favHotels);
      console.log("Success! The hotel has been added to your favourites.");
    }
  }
}
const { hotel } = defineProps({
  hotel: {
    required: true,
    type: Object,
  },
});
</script>