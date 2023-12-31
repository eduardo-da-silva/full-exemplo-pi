import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/generos',
      name: 'genre',
      component: () => import('../views/GenreView.vue')
    },
    {
      path: '/filmes',
      name: 'movie',
      component: () => import('../views/MovieView.vue')
    }
  ]
})

export default router
