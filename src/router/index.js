import Vue from 'vue'
import Router from 'vue-router'
import Web from '../views/Web.vue'
import Phone from '../views/Phone.vue'
import Line from '../views/Line.vue'
import Home from '../components/Home.vue'
import Popular from '../components/Popular.vue'
import Reward from '../components/Reward.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'web',
            component: Web,
            children:[
                {
                    path: '/',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/popular',
                    name: 'popular',
                    component: Popular
                },
                {
                    path: '/reward',
                    name: 'reward',
                    component: Reward
                },
            ],
        },
        {
            path: '/phone',
            name: 'phone',
            component: Phone,
        },
        {
            path: '/line',
            name: 'line',
            component: Line,
        },
    ]
})