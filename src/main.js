import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Buefy from "buefy";
import "aos/dist/aos.css";
import VueSilentbox from "vue-silentbox";

Vue.use(VueSilentbox);
Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
