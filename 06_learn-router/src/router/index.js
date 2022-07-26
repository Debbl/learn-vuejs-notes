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
  { path: "/", redirect: "/home" },
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
  {
    path: "/order",
    component: () => import("../views/Order.vue"),
  },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  // history: createWebHistory(),
});

let isAdmin = true;
if (isAdmin) {
  // 一级路由
  router.addRoute({
    path: "/admin",
    component: () => import("../views/Admin.vue"),
  });

  router.addRoute("home", {
    path: "vip",
    component: () => import("../views/HomeVip.vue"),
  });
}

console.log(router.getRoutes());

router.beforeEach((to, from) => {
  // return false;
  // 1. 跳转的 ->  /login
  // console.log("to-----", to);
  // console.log("from---", from);
  // if (to.path !== "/login") return "/login";

  const token = localStorage.getItem("token");

  if (to.path === "/order" && !token) return "/login";
});

export default router;
