import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home'
// import Login from '../components/Login'

const routes =[
    {
        path: '/',
        hidden: true,
        component: () => import('@/components/Login')
    },
    {
        path: '/login',
        name: 'Login',
        hidden: true,
        component: () => import('@/components/Login.vue')
    },
    // {
    //     path: '*',
    //     name: 'NotFound',
    //     hidden: true,
    //     component: () => import('@/components/NotFound')
    // },
    {
        path: '/home',
        name: '综合管理',
        iconClass: 'fa fa-users',
        redirect: '/home/student',
        component: () => import('@/components/Home'),
        children: [
            {
                path: '/home/student',
                name: '部门列表',
                iconClass: 'fa fa-list',
                component: () => import('@/components/students/StudentList')
            },
            {
                path: '/home/info',
                name: '项目列表',
                iconClass: 'fa fa-list-alt',
                component: () => import('@/components/students/InfoList')
            },
            {
                path: '/home/infos',
                name: '消息通知',
                iconClass: 'fa fa-list-alt',
                component: () => import('@/components/students/InfoLists')
            }
        ]
    },
    {
        path: '/home',
        name: '用例管理',
        iconClass: 'fa fa-bar-chart',
        component: () => import('@/components/Home'),
        children: [
            {
                path: '/home/dataview',
                name: '数据概览',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/components/dataAnalysis/DataView')
            },
            {
                path: '/home/mapview',
                name: '地图概览',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/components/dataAnalysis/MapView')
            },
            {
                path: '/home/travel',
                name: '旅游地图',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/components/dataAnalysis/TravelMap')
            },
            {
                path: '/home/score',
                name: '分数地图',
                iconClass: 'fa fa-line-chart',
                component: () => import('@/components/dataAnalysis/ScoreMap')
            }
        ]
    },
    {
        path: '/users',
        name: '测试报告',
        iconClass: 'fa fa-user',
        component: () => import('@/components/Home'),
        children: [
            {
                path: '/users/user',
                name: '权限管理',
                iconClass: 'fa fa-user',
                component: () => import('@/components/users/User')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router