import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home/Home'
import Result from './components/result/Result'
import Splash from './components/splash/Splash'
import Intro from './components/intro/Intro'
// import Err from './components/404/404'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
        // {
        //     path:'/',
        //     name:'Err',
        //     component:Err
        // },
        {
            path:'/',
            name:'Intro',
            component:Intro
        },
        {
            path:'/home',
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