import { createRouter, createWebHistory } from "vue-router";
import Home from "/src/views/HomePage.vue";
import AllSamurai from "/src/views/AllSamurai.vue";
import Wraith from "/src/views/samurai/Wraith.vue";
import Luna from "/src/views/samurai/Luna.vue";
import Ryder from "/src/views/samurai/Ryder.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/samurai",
    name: "AllSamurai",
    component: AllSamurai,
  },
  {
    path: "/samurai/wraith",
    name: "Wraith",
    component: Wraith,
  },
  {
    path: "/samurai/luna",
    name: "Luna",
    component: Luna,
  },
  {
    path: "/samurai/ryder",
    name: "Ryder",
    component: Ryder,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: function (to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: "smooth" };
    window.scrollTo(0, 0);
  },
});

export default router;
