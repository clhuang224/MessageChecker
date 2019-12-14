import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Popular from '../views/Popular.vue'
import Reward from '../views/Reward.vue'
import Record from '../views/Record.vue'
import About from '../views/About.vue'
import Setting from '../views/Setting.vue'
import Favorite from '../views/Favorite.vue'
import RewardList from '../views/reward/List.vue'
import RewardCoin from '../views/reward/Coin.vue'
import RewardExchange from '../views/reward/Exchange.vue'
import RewardRecord from '../views/reward/Record.vue'

Vue.use(Router)

export default new Router({
    routes: [
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
            component: Reward,
            children: [
                {
                    path: '/reward',
                    name: 'reward',
                    component: RewardList,
                },
                {
                    path: '/reward/coin',
                    name: 'reward/coin',
                    component: RewardCoin,
                },
                {
                    path: '/reward/exchange',
                    name: 'reward/exchange',
                    component: RewardExchange,
                },
                {
                    path: '/reward/record',
                    name: 'reward/record',
                    component: RewardRecord,
                }
            ],
        },
        {
            path: '/record',
            name: 'record',
            component: Record
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: Favorite
        },

    ]
})