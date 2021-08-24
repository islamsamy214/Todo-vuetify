import Vue from "vue";
import VueRouter from "vue-router";
import DashboardPage from "../views/DashboardPage.vue";
import ProjectPage from "../views/ProjectPage.vue";
import TeamPage from "../views/TeamPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: DashboardPage,
    props: true,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectPage,
    props: true,
  },
  {
    path: "/teams",
    name: "teams",
    component: TeamPage,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
