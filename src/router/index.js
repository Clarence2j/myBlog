import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/view/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/aa',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'NotFound',
      component: resolve => require(['@/view/NotFound.vue'] , resolve)
    }
  ]
})
