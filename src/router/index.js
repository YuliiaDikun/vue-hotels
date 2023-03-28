import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import HotelsList from "../views/HotelsList.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/city/:city",
    name: "byCity",
    component: HotelsList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
