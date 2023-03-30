<template>
  <button
    @click="setHotelToLocalStorage"
    class="inline-block mt-auto px-3 py-1 rounded border-2 border-purple-300 hover:bg-purple-300 hover:text-white transition-colors"
  >
    {{ favBtnText }}
  </button>
</template>

<script setup>
import { onMounted, ref } from "vue";
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

onMounted(() => {
  let favHotels = getLocalStorage("favHotels");
  favHotels = favHotels ? favHotels : {};
  if (!Object.keys(favHotels).length) {
    favBtnText.value = "Add to favourites";
    isFavBtnToggled.value = false;
  } else {
    const favHotelsId = Object.keys(favHotels);
    if (favHotelsId.includes(String(hotel.id))) {
      favBtnText.value = "Added to favourites";
      isFavBtnToggled.value = true;
    }
  }
});

const { hotel } = defineProps({
  hotel: {
    required: true,
    type: Object,
  },
});
</script>