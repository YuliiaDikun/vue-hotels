import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import HotelsList from "../views/HotelsList.vue";
import Hotel from "../views/Hotel.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/city/:city?",
        name: "byCity",
        component: HotelsList,
      },
      {
        path: "/hotel/:hotel?",
        name: "byHotel",
        component: Hotel,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
