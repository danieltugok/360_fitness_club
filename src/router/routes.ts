import { type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '',
        name: 'home',
        component: () => import('@/layouts/MainLayout.vue'),
        meta: {
            requireAuth: true
        },
        children: [
            {
                path: '/',
                name: 'Main',
                component: () => import('@/views/HomeView.vue'),
                meta: {
                    requireAuth: false
                }
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/AboutView.vue'),
                meta: {
                    requireAuth: false
                }
            },
        ]
    },
    {
        path: '',
        component: () => import('@/layouts/DefaultLayout.vue'),
        meta: {
            requireAuth: false
        },
        children: [
            {
                path: 'signin',
                name: 'Signin',
                component: () => import('@/views/auth/SigninView.vue'),
                meta: {
                    requireAuth: false
                }
            },
        ]
    },
]

export default routes;