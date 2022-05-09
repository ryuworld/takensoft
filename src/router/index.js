import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/company",
    name: "company",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/service",
    name: "service",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/career",
    name: "career",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/datavoucher",
    name: "datavoucher",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/inquiry",
    name: "inquiry",
    component: () => import("../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
