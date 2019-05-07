import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Phase1 from './components/Phase1.vue';
import Phase2 from './components/Phase2.vue';
import Phase2 from './components/Phase2.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/phase1',
      component: Phase1,
    },
    {
      path: '/phase2',
      component: Phase2,
    },
    {
      path: '*',
      redirect: { name: 'home' },
    },
  ],
});

export default router;
