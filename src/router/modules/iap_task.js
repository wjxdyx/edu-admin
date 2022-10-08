const Layout = () => import('@/layout/index.vue')

export default {
    path: '/iap_task_manage',
    component: Layout,
    redirect: '/iap_task_manage/task',
    name: 'iap_task_manage',
    meta: {
        title: '任务管理',
        icon: 'sidebar-jsx'
    },
    children: [
        {
            path: 'task',
            name: 'task',
            component: () => import('@/views/iap_task_manage/task.vue'),
            meta: {
                title: '任务管理',
                sidebar: false, breadcrumb: false,
                activeMenu: '/iap_task_manage'
            }
        }

    ]
}
