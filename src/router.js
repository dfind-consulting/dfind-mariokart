import Vue from 'vue';
import Router from 'vue-router';
import Leaderboard from './components/Leaderboard.vue';
import AddTime from './components/AddTime.vue';
import Login from './auth/Login.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'leaderboard',
      component: Leaderboard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/add',
      name: 'add',
      component: AddTime,
      meta: {
        requiresAuth: true
      }
    }
  ],
});

export default router