import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import People from '../views/People.vue';
import UserDataFetching from '../views/UserDataFetching.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/people/:id',
    name: '个人存档',
    component: People,
  },
  {
    path: '/people/:id/backup',
    name: '备份用户数据',
    component: UserDataFetching,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
