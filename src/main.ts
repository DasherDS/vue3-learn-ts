import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from 'vant';
import 'vant/lib/index.css';


// const app = createApp(App);
// app.use(Vant);
// app.use(store);
// app.use(router);
// app.mount("#app");

createApp(App)
  .use(store)
  .use(router)
  .use(Vant)
  .mount("#app");
