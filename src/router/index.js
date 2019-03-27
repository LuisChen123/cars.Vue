import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import aboutus from '@/components/aboutUs.vue'
import allCarShow from '@/components/allCarShow.vue'
import fieldNews from '@/components/fieldNews.vue'
import comment from '@/components/comment.vue'
import firstCarPage from '@/components/children/grandChildren/firstCarPage.vue'
import secondCarPage from '@/components/children/grandChildren/secondCarPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    // {
    //   path: '/nav',            这个是需要页面跳转的组件路径，which means 如果是通用性模板，是不需要在此规划出路径的
    //   name: 'nav',
    //   component: nav
    // },
    // {
    //   path: '/footer',
    //   name: 'footer',
    //   component: footer
    // },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/allcarshow',
      name: 'allcarshow',
      component: allCarShow,
      children:[{
        path:'/allcarshow',
        redirect:'firstCarPage'
      },
      {
        path:'firstCarPage',
        name:firstCarPage,
        component:firstCarPage
      },
      {
        path:'secondCarPage',
        name:secondCarPage,
        component:secondCarPage
      }  
    ]
    },
    {
      path:'/fieldNews',
      name:'fieldNews',
      component:fieldNews,
    },
    {
      path:'/comment',
      name:'comment',
      component:comment,
    },
  ]
})
