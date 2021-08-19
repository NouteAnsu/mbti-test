import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home/Home'
import Result from './components/result/Result'
import Splash from './components/splash/Splash'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        {
            path:'/',
            name:'Home',
            component:Home
        },
        {
            path:'/result',
            name:'Result',
            component:Result
        },
        {
            path:'/splash',
            name:'Spalsh',
            component:Splash
        }
    ]
})