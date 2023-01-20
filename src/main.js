import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PostCard from "./components/PostCard.vue";
import Calculator from "./components/Calculator.vue";
import Converter from "./components/Converter.vue";
import SmallCard from "./components/SmallCard.vue";
import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("post-card", PostCard);
app.component("calculator", Calculator);
app.component("euro-kuna-converter", Converter);
app.component("small-card", SmallCard);
app.mount("#app");