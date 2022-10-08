const Layout = () => import('@/layout/index.vue')

export default {
    path: '/feedback',
    component: Layout,
    redirect: '/feedback/feedback',
    name: 'feedback',
    meta: {
        title: '问题反馈',
        icon: 'sidebar-jsx'
    },
    children: [
        {
            path: 'feedback',
            name: 'feedback',
            component: () => import('@/views/feedback/feedback.vue'),
            meta: {
                title: '用户反馈',
                sidebar: false, breadcrumb: false,
                activeMenu: '/feedback'
            }
        }

    ]
}
