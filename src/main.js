import "./style/base.scss";
import router from "./router/router";
import {createApp} from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const app = createApp(App);
app.use(router);
app.mount("#app");
