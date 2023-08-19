// createRouter: 创建路由实例
// createWebHistory: 创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系的位置
  routes: [
   {
    path:'/',
    component:() => import("@/views/Layout/index.vue"),
    children:[
      {
        path:"",//置空   当浏览器访问/时, 这个组件也会得到渲染
        component:() => import("@/views/Home/index.vue")
      },
      {
        path:"category/:id",
        component:() => import("@/views/Category/index.vue"),
      },
      {
        path:"category/sub/:id",
        component:() => import("@/views/SubCategory/index.vue")
      }
    ]
   },
   {
    path:"/login",
    component:import("@/views/Login/index.vue")
   }
  ]
})

export default router
