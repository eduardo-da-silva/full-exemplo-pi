import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClientesView from "../views/ClientesView.vue";
import ConsultasView from "../views/ConsultasView.vue";
/*import EspeciesView from "../views/EspeciesView.vue";
import RacasView from "../views/RacasView.vue";*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/clientes",
      name: "clientes",
      component: ClientesView,
    },
    {
      path: "/consultas",
      name: "consultas",
      component: ConsultasView,
    },
    /*{
      path: "/especies",
      name: "especies",
      component: EspeciesView,
    },
    {
      path: "/racas",
      name: "racas",
      component: RacasView,
    },*/
  ],
});

export default router;
