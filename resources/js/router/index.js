import { createRouter, createWebHistory } from 'vue-router'
import CustomerIndex from '../components/CustomerIndex.vue'
// import PostsView from '../views/PostsView.vue'
// import DetailView from '../views/DetailView.vue'

const routes = [
  {
    path: '/dashboard',
    name: 'customers.index',
    component: CustomerIndex
  },

  // {
  //   path: '/posts',
  //   name: 'posts',
  //   component: PostsView
  // },

  // {
  //   path: '/posts/:id',
  //   name: 'DetailView',
  //   component: DetailView,
  //   props: true
  // }

  
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
