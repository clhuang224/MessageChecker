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
import RewardBarcode from '../views/reward/Barcode.vue'
import BarList from '../components/BarList.vue'
import DotList from '../components/DotList.vue'
import Article from '../components/Article.vue'

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
                },
                {
                    path: '/reward/barcode',
                    name: 'reward/barcode',
                    component: RewardBarcode,
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
                        list: [{ name: "已查證", link: "/record/article" },
                        { name: "未查證", link: "/record/checking" }]
                    }
                },
                {
                    path: '/record/article',
                    name: 'record/article',
                    component: DotList,
                    props: {
                        title: '已查證',
                        list: [
                            {
                                name: "吃蘋果傷身體",
                                link: "/article/0",
                                emphasized: false
                            },
                            {
                                name: "寵物不吃骨頭",
                                link: "/article/2",
                                emphasized: false
                            },
                        ],
                        buttonWord: ['查看', '已查證']
                    }
                },
                {
                    path: '/record/checking',
                    name: 'record/checking',
                    component: DotList,
                    props: {
                        title: '尚未查證',
                        list: [
                            { name: "紅白蘿蔔不能一起吃", link: "/article/1", emphasized: true },
                            { name: "明年2月所得稅增加20%", link: "/article/3", emphasized: false }
                        ],
                        buttonWord: ['查看', '已查證']
                    }
                },
            ],
        },
        {
            path: '/article/:id',
            name: 'article',
            component: Article,
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
            component: Favorite,
        },

    ]
})