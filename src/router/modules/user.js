const Layout = () => import('@/layout/index.vue')
export default {
    path: '/user_manage',
    component: Layout,
    redirect: '/user_manage/index',
    name: 'userManage',
    meta: {
        title: '用户列表',
        icon: 'sidebar-jsx'
    },
    children: [
        {
            path: '/index',
            name: 'userManageIndex',
            component: () => import('@/views/user_manage/index.vue'),
            meta: {
                title: '普通用户'

            }
        },
        // intermet_access_provider

        {
            path: 'IAP',
            name: 'userManageIAP',
            component: () => import('@/views/user_manage/IAP.vue'),
            meta: {
                title: '接入的供应商'

            }
        },
        {
            path: 'waitVerifyIAP',
            name: 'userManageWaitVerifyIAP',
            component: () => import('@/views/user_manage/waitVerifyIAP.vue'),
            meta: {
                title: '待验证供应商'
            }
        },
        {
            path: 'cash',
            name: 'userManagecash',
            component: () => import('@/views/user_manage/cash.vue'),
            meta: {
                title: '待审核提现'
            }
        }
    ]
}
