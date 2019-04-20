import Vue from 'vue'
import Router from 'vue-router'
import tz from '@/components/tz'
import tz1 from '@/components/tz1'
import tz2 from '@/components/tz2'

Vue.use(Router)

export default new Router({
  routes: [
  
    {
      path: '/',
      name: 'tz',
      component: tz
    }
    ,
    {
      path: '/tz1',
      name: 'tz1',
      component: tz1
    },
    ,
    {
      path: '/tz2',
      name: 'tz2',
      component: tz2
    },
  ]
})
