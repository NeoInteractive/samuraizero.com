import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () =>
        import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
    },
    {
      path: "/media",
      name: "Media",
      component: () =>
        import(/* webpackChunkName: "Media" */ "@/views/Media.vue"),
    },
    {
      path: "/gauntlet",
      name: "Gauntlet",
      component: () =>
        import(/* webpackChunkName: "Media" */ "@/views/Gauntlet.vue"),
    },
    {
      path: "/faq",
      name: "FAQ",
      component: () => import(/* webpackChunkName: "FAQ" */ "@/views/FAQ.vue"),
    },
    {
      path: "/samurai",
      name: "Samurai",
      component: () =>
        import(/* webpackChunkName: "Samurai" */ "@/views/Samurai.vue"),
    },
    {
      path: "/samurai/wraith",
      name: "Wraith",
      component: () =>
        import(/* webpackChunkName: "Wraith" */ "@/views/samurai/Wraith.vue"),
    },
    {
      path: "/samurai/ryder",
      name: "Ryder",
      component: () =>
        import(/* webpackChunkName: "Ryder" */ "@/views/samurai/Ryder.vue"),
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
export default router;
