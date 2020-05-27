import Vue from "vue";
import VueRouter from "vue-router";
// import Loading from "../views/Loading.vue"
// import Register from "../views/Register.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Loading",
    component: () => import('../views/Loading.vue')
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import('../views/Home.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/Login.vue')
  },
  {
    path: "/loginnormal",
    name: "LoginNormal",
    component: () => import('../views/LoginNormal.vue')
  },
  {
    path: "/Register",
    name: "Register",
    component: () => import('../views/Register.vue')
  },
  {
    path: "/Groups",
    name: "Groups",
    component: () => import('../views/Groups.vue')
  },
  {
    path: "/Messages",
    name: "Messages",
    component: () => import('../views/Messages.vue')
  },
  {
    path: "/Friends",
    name: "Friends",
    component: () => import('../views/Friends.vue')
  },
  {
    path: "/Tickets",
    name: "Tickets",
    component: () => import('../views/Tickets.vue')
  },
  {
    path: "/Calender",
    name: "Calender",
    component: () => import('../views/Calender.vue')
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import('../views/Profile.vue')
  },
  {
    path: "/ProfilePage",
    name: "ProfilePage",
    component: () => import('../views/ProfilePage.vue')
  },
  {
    path: "/Festival",
    name: "Festival",
    component: () => import('../views/Festival.vue')
  },
  {
    path: "/Settings",
    name: "Settings",
    component: () => import('../views/Settings.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;
