import isAuthentificatedUser from '@/router/middleware/isAuthentificatedUser';

export default [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'empty',
      middleware: [isAuthentificatedUser],
    },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: 'default',
      middleware: [isAuthentificatedUser],
    },
    component: () => import('@/views/About.vue'),
  },
];
