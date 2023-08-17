import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import CarView from "../components/LaithAcademy/CarView.vue";
import Dealer from "../components/LaithAcademy/Dealer.vue";
import Manufacturer from "../components/LaithAcademy/Manufacturer.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/car/:id",
    name: "carView",
    component: CarView,
    children: [
      {
        path: "dealer",
        name: "dealer",
        component: Dealer,
      },
      {
        path: "manufacturer",
        name: "manufacturer",
        component: Manufacturer,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

export default createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes,
});
