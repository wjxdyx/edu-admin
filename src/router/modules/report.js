const Layout = () => import('@/layout/index.vue')

export default {
    path: '/report',
    component: Layout,
    redirect: '/report/cash',
    name: 'report',
    meta: {
        title: '报表',
        icon: 'sidebar-jsx'
    },
    children: [
        {
            path: 'cash',
            name: 'cash',
            component: () => import('@/views/report/cash.vue'),
            meta: {
                title: '提现明细',
                sidebar: false, breadcrumb: false,
                activeMenu: '/report'
            }
        }

    ]
}
