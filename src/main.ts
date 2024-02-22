import { createApp } from "vue";
import "app/style.css";
import App from "app/App.vue";
import PrimeVue from "primevue/config";
import router from "app/router";

createApp(App).use(PrimeVue).use(router).mount("#app");
