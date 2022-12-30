import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/texts",
      name: "texts",
      component: () => import("../views/TextView.vue"),
    },
    {
      path: "/color-palettes",
      name: "color palettes",
      component: () => import("../views/ColorPalettesView.vue"),
    },
    {
      path: "/buttons",
      name: "buttons",
      component: () => import("../views/ButtonsView.vue"),
    },
    {
      path: "/inverted-buttons",
      name: "inverted buttons",
      component: () => import("../views/InvertedButtonsView.vue"),
    },
    {
      path: "/messages",
      name: "system messages",
      component: () => import("../views/MessagesView.vue"),
    },
  ],
});

export default router;
