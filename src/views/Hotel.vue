<template>
  <section v-if="hotel" class="max-w-5xl mx-auto p-8 bg-white border-t-2 border-sky-900">
    <h2 class="text-4xl font-bold mb-5 text-sky-900">
      {{ hotel.summary?.name }}
    </h2>

    <img
      :src="hotel.propertyGallery?.images[0].image.url"
      :alt="hotel.summary?.name"
      class="max-w-[100%] mx-auto my-0"
    />

    <div class="flex flex-col gap-3">
      <p class="inline-flex gap-2 text-sky-900 font-bold text-xl">
        <img
          src="../assets/star-svgrepo-com.svg"
          alt="star rating"
          width="20"
        />
        Hotel Rating:
        <span class="text-black  text-l">
          {{ hotel.summary?.overview.propertyRating.rating }} stars.</span
        >
      </p>

      <p
        class="inline-flex items-center justify-start gap-1 text-sky-900 font-bold text-xl"
      >
        <img src="../assets/location.svg" alt="location" width="20" />
        Location area:
        <span class="text-black">{{
          hotel.summary?.location.address.addressLine
        }}</span>
      </p>
      <p
        class="inline-flex items-start justify-start gap-1 text-sky-900 font-bold text-xl"
      >
        <img src="../assets/around.svg" alt="around" width="20" />
        What is around:
      </p>
      <p class="text-slate-600 font-bold">
        {{ hotel.summary?.location.whatsAround.editorial.content[0] }}
      </p>
      <p class="inline-flex gap-2 text-sky-900 font-bold text-xl">
        <img src="../assets/chekin.svg" alt="chekin" width="20" />
        Checkin Instructions:
      </p>
      <ol class="px-4">
        <li
          class="text-slate-600 font-bold "
          v-for="(inctruction, index) in hotel.summary?.policies
            .checkinInstructions"
          :key="index"
        >
          {{ index + 1 }}. {{ inctruction }}
        </li>
      </ol>
      <p
        class="inline-flex items-center justify-start gap-1 text-sky-900 font-bold text-xl"
      >
        <img src="../assets/pets.svg" alt="dog" width="20" />
        Pets politics:
        <span class="text-black">{{
          hotel.summary?.policies.pets.body[0]
        }}</span>
      </p>
      <p
        class="inline-flex items-center justify-start gap-1 text-sky-900 font-bold text-xl"
      >
        <img src="../assets/review.svg" alt="review" width="20" />
        Review:
        <span class="text-black">{{
          hotel.reviewInfo?.summary.overallScoreWithDescriptionA11y.value
        }}</span>
      </p>
      <FavouriteBtn :hotel="hotel" />
    </div>
  </section>
  <p v-else class="flex justify-center text-gray-600 p-8">loading...</p>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getHotelInfo } from "../helpers/getHotelInfo";
import hotelInstance from "../service/hotelAPI";

import FavouriteBtn from "../components/FavouriteBtn.vue";

const route = useRoute();
const isLoading = ref(false);
const hotel = ref(null);
const id = route.params.id;

onMounted(async () => {
  const fetchedHotel = await getHotelInfo(id);
  fetchedHotel.id = id; 
  hotel.value = fetchedHotel;
  isLoading.value = true;
});
</script>