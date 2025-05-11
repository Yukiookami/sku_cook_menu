import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // 重定向：将根路径重定向到 /login
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/index.vue"),
    meta: {
      title: "登录",
      hideHeader: true, // 隐藏头部
      hideFooter: true, // 隐藏底部
    },
  },
  // 404 页面：匹配所有未定义的路由
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "NotFound",
  //   component: () => import("../views/NotFound.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
