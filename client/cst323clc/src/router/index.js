import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CreateView from "@/views/CreateView.vue";
import InventoryView from "@/views/InventoryView.vue";

const routes = [
  {
    //Root/home path
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    //Create path
    path: "/create",
    name: "Create",
    component: CreateView,
  },
  {
    //Inventory path
    path: "/inventory",
    name: "Inventory",
    component: InventoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
