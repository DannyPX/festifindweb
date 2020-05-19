import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login/",
    name: "Login",
    component: () => import('../views/Login.vue')
  },
  {
    path: "/Register/",
    name: "Register",
    component: () => import('../views/Register.vue')
  },
  {
    path: "/Groups/",
    name: "Groups",
    component: () => import('../views/Groups.vue')
  },
  {
    path: "/Messages/",
    name: "Messages",
    component: () => import('../views/Messages.vue')
  },
  {
    path: "/Tickets/",
    name: "Tickets",
    component: () => import('../views/Tickets.vue')
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
