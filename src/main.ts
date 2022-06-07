import { createApp } from "vue";
import { createHead } from "@vueuse/head";
import App from "./App.vue";
import router from "./routes";
import "./index.css";

const app = createApp(App);
const head = createHead();

app.use(router);
app.use(head);
app.mount("#app");
