import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import RoomList from "../views/RoomList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component : About
  },
  {
    path: "/rooms",
    name: "Roomlist",
    component : RoomList
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
