import { createRouter, createWebHistory } from "vue-router";

import PanelLayout from "../layouts/PanelLayout.vue";

const ManageLoads = () => import("../views/ManageLoads.vue");
const ManageComments = () => import("../views/ManageComments.vue");
const ManageUsers = () => import("../views/ManageUsers.vue");
const ManagePayments = () => import("../views/ManagePayments.vue");
const Login = () => import("../views/LoginView.vue");
const NotFound = () => import("../views/NotFoundView.vue");

const routes = [
  {
    path: "/",
    name: "panel",
    component: PanelLayout,
    redirect: "/loads",
    children: [
      {
        path: "loads",
        name: "loads",
        component: ManageLoads,
      },
      {
        path: "comments",
        name: "comments",
        component: ManageComments,
      },
      {
        path: "users",
        name: "users",
        component: ManageUsers,
      },
      {
        path: "payments",
        name: "payments",
        component: ManagePayments,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
