import Vue from "vue";
import VueRouter from "vue-router";
// import Loading from "../views/Loading.vue"
// import Register from "../views/Register.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Loading",
    component: () => import("../views/Loading.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/loginnormal",
    name: "LoginNormal",
    component: () => import("../views/LoginNormal.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/groups",
    name: "Groups",
    component: () => import("../views/Groups.vue"),
  },
  {
    path: "/messages",
    name: "Messages",
    component: () => import("../views/Messages.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () => import("../views/Friends.vue"),
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: () => import("../views/Tickets.vue"),
  },
  {
    path: "/calender",
    name: "Calender",
    component: () => import("../views/Calender.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/profilePage",
    name: "ProfilePage",
    component: () => import("../views/ProfilePage.vue"),
  },
  {
    path: "/festival",
    name: "Festival",
    component: () => import("../views/Festival.vue"),
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
