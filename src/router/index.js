import HelloWorld from '@/components/HelloWorld.vue'
import * as VueRouter from 'vue-router'

const routes = [
  { path: '/', component: HelloWorld, name: 'HelloWorld' },
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router