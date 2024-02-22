import { pathRoutes } from "shared/config/path-routes/path-routes";
import { RouteRecordRaw } from "vue-router";

import homePageVue from "pages/home-page.vue";
import todoPageVue from "pages/todo-page.vue";
import sectionPageVue from "pages/section-page.vue";
import aboutPageVue from "pages/about-page.vue";

export const routing: RouteRecordRaw[] = [
  {
    path: pathRoutes.home.patch,
    name: pathRoutes.home.name,
    component: homePageVue,
  },
  {
    path: pathRoutes.todo.patch,
    name: pathRoutes.todo.name,
    component: todoPageVue,
  },
  {
    path: pathRoutes.section.patch,
    name: pathRoutes.section.name,
    component: sectionPageVue,
  },
  {
    path: pathRoutes.about.patch,
    name: pathRoutes.about.name,
    component: aboutPageVue,
  },
];
