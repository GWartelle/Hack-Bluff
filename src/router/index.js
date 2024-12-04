import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import WheelView from "../views/WheelView.vue";
import RulesView from "../views/RulesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/wheel",
      name: "wheel",
      component: WheelView,
    },
    {
      path: "/rules",
      name: "rules",
      component: RulesView,
    },
  ],
});

export default router;
