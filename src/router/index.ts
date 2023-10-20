import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path:'/',
      name: 'home',
      component: ()=>import(/*webpackchunkName:home*/ '../views/Home.vue')
      },

      {
        path:'/Pay-N-Play',
        name: 'payandplay',
        component: ()=> import(/* webpackchunkName:payandplay */ '../views/PayNPlay.vue')
      }
  ]
})



export default router;
