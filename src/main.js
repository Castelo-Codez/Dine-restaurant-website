import "./style/base.scss";
import router from "./router/router.js";
import {createApp} from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
const app = createApp(App);
app.use(router);
app.mount("#app");
