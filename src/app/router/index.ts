import { createWebHistory, createRouter } from "vue-router";
import { routing } from "./routing";

const router = createRouter({
  history: createWebHistory(),
  routes: routing,
});

export default router;
