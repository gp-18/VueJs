import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Posts from '../views/Posts.vue'
import PostDetail from '../views/PostDetail.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: { transition: 'slide-right' }
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },

  {
    path: '/posts/:id',
    name: 'postdetail',
    component: PostDetail
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router