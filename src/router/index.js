import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    
  ]
})

// Création de la page 404
const NotFound = {
  template: `
    <div>
      <h1>Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
    </div>
  `
}

// Ajout de la page 404 au router
router.addRoute('*', NotFound)



export default router
