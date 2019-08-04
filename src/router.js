import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import NotFound from "./views/404.vue";
import findLast from "lodash/findLast";
import { check, isLogin } from "./utils/auth.js";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      hideInMenu: true,
      component: () => import("./layout/UserLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () => import("./views/User/Login.vue")
        },
        {
          path: "/user/register",
          name: "login",
          component: () => import("./views/User/Register.vue")
        }
      ]
    },
    {
      path: "/",
      meta: { authority: ["user", "admin"] },
      component: () => import("./layout/BasicLayout"),
      children: [
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { icon: "dashboard", title: "仪表盘" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: { title: "分析页" },
              component: () => import("./views/Dashboard/Analysis")
            }
          ]
        },
        {
          path: "/form",
          name: "form",
          meta: { icon: "form", title: "表单", authority: ["admin"] },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/form/basic-form",
              name: "basic-form",
              meta: { title: "基础表单" },
              component: () => import("./views/Forms/BasicForm")
            },
            {
              path: "/form/step-form",
              name: "stepform",
              hideChildrenInMenu: true,
              meta: { title: "分布表单" },
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  meta: { title: "自定义" },
                  name: "info",
                  component: () => import("./views/Forms/BasicForm")
                },
                {
                  path: "/form/step-form/confirm",
                  meta: { title: "自定义" },
                  name: "confirm",
                  component: () => import("./views/Forms/BasicForm")
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    },
    {
      path: "*",
      name: "403",
      hideInMenu: true,
      component: NotFound
    }
  ]
});

router.beforeEach((to, form, next) => {
  NProgress.start();
  const record = findLast(to.matched, record => record.meta.authority);
  if (record && !check(record.meta.authority)) {
    if (!isLogin() && to.path !== "/user/login") {
      next({
        path: "/user/login"
      });
    } else if (to.path != "/403") {
      next({
        path: "/403"
      });
    }
    NProgress.done();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
