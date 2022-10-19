import { createRouter, createWebHistory } from 'vue-router'
import createCardView from '../views/createCardView.vue'
import manageCardView from '../views/manageView.vue'
import redeemCardView from '../views/redeemView.vue'
import landingPageView from '../views/landingPageView.vue'

const routes = [
  {
    path: '/',
    name: 'landingPage',
    component: landingPageView
  },
  {
    path: '/create',
    name: 'createCard',
    component: createCardView
  },
  {
    path: '/manage',
    name: 'manageCards',
    component: manageCardView
  },
  {
    path: '/redeem',
    name: 'redeem',
    component: redeemCardView
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
