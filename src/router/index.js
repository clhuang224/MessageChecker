import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Popular from '../views/Popular.vue'
import Reward from '../views/Reward.vue'
import Record from '../views/Record.vue'
import About from '../views/About.vue'
import Setting from '../views/Setting.vue'
import Favorite from '../views/Favorite.vue'
import RewardCoin from '../views/reward/Coin.vue'
import RewardExchange from '../views/reward/Exchange.vue'
import RewardRecord from '../views/reward/Record.vue'
import BarList from '../components/BarList.vue'
import DotList from '../components/DotList.vue'

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
                    component: BarList,
                    props: {
                        list: [
                            {
                                name: "我的金幣",
                                link: "/reward/coin"
                            },
                            {
                                name: "兌換獎品",
                                link: "/reward/exchange"
                            },
                            {
                                name: "兌換紀錄",
                                link: "/reward/record"
                            }
                        ]
                    }
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
            component: Record,
            children: [
                {
                    path: '/record',
                    name: 'record',
                    component: BarList,
                    props: {
                        list: [{ name: "已查證", link: "/record/checked" },
                        { name: "未查證", link: "/record/checking" }]
                    }
                },
                {
                    path: '/record/checked',
                    name: 'record/checked',
                    component: DotList,
                    props: {
                        title: '已查證',
                        list: [
                            { name: "娛樂圈10大美人", link: "", emphasized: false },
                            { name: "吃蘋果傷身體", link: "", emphasized: false  }
                        ],
                        buttonWord:['查看','已查證']
                    }
                },
                {
                    path: '/record/checking',
                    name: 'record/checking',
                    component: DotList,
                    props: {
                        title: '尚未查證',
                        list: [
                            { name: "娛樂圈10大美人", link: "", emphasized: true },
                            { name: "吃蘋果傷身體", link: "", emphasized: false  }
                        ],
                        buttonWord:['查看','已查證']
                    }
                },
            ],
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