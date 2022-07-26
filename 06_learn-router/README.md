# 06_learn-router

## 路由的懒加载
- `component: () => import(/* webpackChunkName: "home-chunk" */'../views/Home.vue')`

## 动态路由
- `path: "/user/:id"`

## 动态添加路由
- addRoute

## 动态删除路由
- removeRoute
- 调用`addRoute`的返回值
- 获取所有路由映射对象 `getRoutes()`
