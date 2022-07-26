import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

// import Home from "../views/Home.vue";
// import About from "../views/About.vue";

const routes = [
  // { path: "/", redirect: "/home" },
  // { path: "/home", component: Home },
  // { path: "/about", component: About },
  { path: "/", component: "/home" },
  {
    name: "home",
    path: "/home",
    component: () =>
      import(/* webpackChunkName: "home-chunk" */ "../views/Home.vue"),
    mate: {
      name: "debbl",
      age: 18,
    },
    children: [
      {
        name: "homeIndex",
        path: "/home",
        redirect: "/home/recommend",
      },
      {
        path: "recommend",
        component: () => import("../views/Recommend.vue"),
      },
      {
        path: "product",
        component: () => import("../views/Product.vue"),
      },
    ],
  },
  {
    name: "about",
    path: "/about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/user/:id",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // history: createWebHistory(),
});

export default router;
