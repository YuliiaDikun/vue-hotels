<template>
  <button
    @click="setHotelToLocalStorage"
    class="inline-block mt-auto px-3 py-1 text-sm rounded border-2 border-sky-900 hover:bg-sky-900 hover:text-white transition-colors"
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
  favBtnText.value = isFavBtnToggled.value
    ? "Remove from favourites"
    : "Add to favourites";

  let favHotels = getLocalStorage("favHotels");
  favHotels = favHotels ? favHotels : {};

  if (!Object.keys(favHotels).length) {
    favHotels[hotel.id] = hotel;
    setLocalStorage("favHotels", favHotels);
  } else {
    const favHotelsId = Object.keys(favHotels);
    if (favHotelsId.includes(String(hotel.id))) {
      delete favHotels[hotel.id];
      setLocalStorage("favHotels", favHotels);
    } else {
      favHotels[hotel.id] = hotel;
      setLocalStorage("favHotels", favHotels);
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
      favBtnText.value = "Remove from favourites";
      isFavBtnToggled.value = true;
    }
  }
});

const { hotel, isClicked} = defineProps({
  hotel: {
    required: true,
    type: Object,
  },  
});
</script>
