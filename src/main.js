import { createApp } from 'vue'
import './style.css'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'
import HomePage from './components/HomePage.vue'

const routes = [
  { path: '/', redirect: '/id/id/inquiry' },
  { path: '/id/id/inquiry', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
router.isReady().then(() => app.mount('#app'))
