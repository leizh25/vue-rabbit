// createRouter: 创建路由实例
// createWebHistory: 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系的位置
  routes: [
    {
      path: '/',
      component: () => import("@/views/Layout/index.vue"),
      children: [
        {
          path: "",//置空   当浏览器访问/时, 这个组件也会得到渲染
          component: () => import("@/views/Home/index.vue")
        },
        {
          path: "category/:id",
          component: () => import("@/views/Category/index.vue"),
        },
        {
          path: "category/sub/:id",
          component: () => import("@/views/SubCategory/index.vue")
        },
        {
          path: "detail/:id",
          component: () => import("@/views/Detail/index.vue")
        },
        {
          path: "cartlist",
          component: () => import("@/views/CartList/index.vue")
        },
        {
          path: "checkout",
          component: () => import("@/views/Checkout/index.vue")
        },
        {
          path: "pay",
          component: () => import("@/views/Pay/index.vue")
        },
        {
          path: "paycallback",
          component: () => import("@/views/Pay/PayBack.vue")
        },
        {
          path: "member",
          component: () => import("@/views/Member/index.vue"),
          redirect:"member/user",
          children:[
            {
              path:"",
              component:() => import("@/views/Member/components/UserInfo.vue")
            },
            {
              path:"order",
              component:() => import("@/views/Member/components/UserOrder.vue")
            },
          ]
        },
      ]
    },
    {
      path: "/login",
      component: () => import("@/views/Login/index.vue")
    }
  ],
  //路由行为定制
  scrollBehavior() {
    return {
      top: 0
    }
  }
})

export default router
