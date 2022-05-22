import { createRouter, createWebHistory } from 'vue-router'
import ActuView from '../views/ActuView.vue'
import LoginView from "../views/LoginView.vue";
import ProfilView from "../views/ProfilView.vue";

const routes = [
  {
    path: "/",
    name: "Actu",
    component: ActuView,
  },

  {
    path: "/Login",
    name: "Login",
    component: LoginView,
  },

  {
    path: "/Profil/:id",
    name: "Profil",
    component: ProfilView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
