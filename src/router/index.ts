import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path:'/',
      name: 'login',
      component: ()=>import(/*webpackchunkName:home*/ '../views/Login.vue')
     },

     {
      path:'/home',
      name: 'home',
      component: ()=>import(/*webpackchunkName:home*/ '../views/Home.vue')
     },


     {
      path:'/signup',
      name: 'signup',
      component: ()=>import(/*webpackchunkName:home*/ '../views/Signup.vue')
     },

      {
        path:'/Pay-N-Play',
        name: 'payandplay',
        component: ()=> import(/* webpackchunkName:payandplay */ '../views/PayNPlay.vue')
      },
      {
        path:'/PriceTicketEnquiry',
        name: 'priceticketenquiry',
        component: ()=> import(/* webpackchunkName:payandplay */ '../views/PriceTicketEnquiry.vue')
      },
      {
        path:'/GameSummary',
        name: 'gamesummary',
        component: ()=> import(/* webpackchunkName:payandplay */ '../views/GameSummary.vue')
      },
      {
        path:'/GameTicket',
        name: 'gameticket',
        component: ()=> import(/* webpackchunkName:payandplay */ '../views/GameTicket.vue')
      }
  ]
})



export default router;
