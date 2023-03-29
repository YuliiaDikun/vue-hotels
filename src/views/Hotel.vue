<template>
  <div  class="max-w-5xl mx-auto p-8">
    <h2 class="text-4xl font-bold mb-5 text-orange-500">
      {{ hotel.summary?.name }}
    </h2>
    
      <img :src="hotel.propertyGallery?.images[0].image.url" alt="" class="max-w-[100%] mx-auto my-0"/>
   
    <div class="flex flex-col gap-3">
      <p class="inline-flex gap-2 text-orange-500 font-bold"> <img src="../assets/star-svgrepo-com.svg" alt="star rating" width="20"> Hotel Rating: {{ hotel.summary?.overview.propertyRating.rating }}</p>
      <div>
        <p class="inline-flex gap-2 text-orange-500 font-bold"><img src="../assets/chekin.svg" alt="chekin" width="20"> Checkin Instructions:</p>
        <ol class="px-4">
          <li class="text-slate-600 font-medium"
            v-for="(inctruction, index) in hotel.summary?.policies
              .checkinInstructions"
            :key="index"
          >
            {{ index+1 }}. {{ inctruction }}
          </li>
        </ol>
      </div>
      <div>
        <p  class="inline-flex items-center justify-center gap-2 text-orange-500 font-bold">
          <img src="../assets/pets.svg" alt="dog" width="40">
          Pets politics: <span class="text-black">{{ hotel.summary?.policies.pets.body[0] }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import hotelInstance from "../service/hotelAPI";

const route = useRoute();
const hotel = ref({});


onMounted(async () => {
  const id = route.params.id;
  const { data } = await hotelInstance.post("properties/v2/detail", {
    propertyId: id,
  });
  hotel.value = data.data.propertyInfo || {};
});
</script>