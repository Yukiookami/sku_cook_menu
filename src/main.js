import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
// 引入字体图标
import "./assets/font/fontIcon/style.css";
// 引入css重置
import "./assets/style/cssrest.scss";
// 引入vant4
import Vant from "vant";
import "vant/lib/index.css";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(Vant);

app.mount("#app");
