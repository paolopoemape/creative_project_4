import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Review from '../views/Review.vue'
import Edit from '../views/Edit.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/review',
    name: 'review',
    component: Review
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
