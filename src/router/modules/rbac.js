const Layout = () => import('@/layout/index.vue')

export default [
    {
        path: '/rbac',
        component: Layout,
        redirect: '/rbac/roleAuth',
        name: 'rbac',
        meta: {
            title: '权限分配',
            icon: 'sidebar-jsx',
            auth: {
                ['rbacRoleAuthUser.read']: 'test',
                ['rbacRoleAuthUser.create']: 'test',
                ['rbacRoleAuthUser.edit']: 'test',
                ['rbacRoleAuthUser.delete']: 'test',

                ['rbacRoleAuthRole.read']: 'test',
                ['rbacRoleAuthRole.edit']: 'test'
            }
        },
        children: [
            {
                path: 'roleAuth',
                name: 'rbacRoleAuth',
                component: () => import('@/views/rbac/userRole.vue'),
                meta: {
                    title: '用户以及角色权限',
                    auth: {
                        ['rbacRoleAuthUser.read']: '查看授权用户',
                        ['rbacRoleAuthUser.create']: '创建授权用户',
                        ['rbacRoleAuthUser.edit']: '编辑授权用户',
                        ['rbacRoleAuthUser.delete']: '删除授权用户',

                        ['rbacRoleAuthRole.read']: '查看角色授权规则',
                        ['rbacRoleAuthRole.edit']: '编辑角色授权规则'
                    }
                    // auth: ['admin']
                }
            },
            {
                path: 'menuResource',
                name: 'rbacMenuResource',
                component: () => import('@/views/rbac/menuResource.vue'),
                meta: {
                    title: '页面资源管理'
                }
            }
        ]
    }
]
