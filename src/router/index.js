import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import(/* webpackChunkName: "about" */ '../views/Students.vue')
  },
  {
    path: '/staff',
    name: 'Staff',
    component: () => import(/* webpackChunkName: "about" */ '../views/Staff.vue')
  },
  {
    path: '/houses',
    name: 'Houses',
    component: () => import(/* webpackChunkName: "about" */ '../views/Houses.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router
