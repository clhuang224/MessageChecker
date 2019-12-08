import Vue from 'vue'
import Router from 'vue-router'
import Web from '../views/Web.vue'
import Phone from '../views/Phone.vue'
import Line from '../views/Line.vue'
import Home from '../components/Home.vue'

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