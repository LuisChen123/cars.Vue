import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import nav from '@/components/children/nav.vue'
import footer from '@/components/children/footer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    }

  ]
})
