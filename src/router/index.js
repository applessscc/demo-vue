import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MyFirstVue from '@/components/demo/MyFirstVue'
import Home from '../components/demo/Home.vue'
import About from '../components/demo/About.vue'
import Index from '../components/demo/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Index,
      component: Index
    },
    {
    //   // path: '/',
    //   // name: 'HelloWorld',
    //   // component: HelloWorld
      path: '/myFirstVue',
      name: MyFirstVue,
      component: MyFirstVue
    },
    {
      path: '/home',
      name: Home,
      component: Home
    },
    {
      path: '/About',
      name: About,
      component: About
    }
  ]
})
