import api from './index'
// 获取权限分组（角色）
export const getRoleTree = params => {
    return api.get('/system/auth/role', { params })
}
// 获取角色下的资源权限规则
export const getRolePermission = params => {
    return api.get('/system/auth/rolePermission', { params })
}
// 获取角色下的授权用户
export const getRoleUser = params => {
    return api.get('/system/auth/roleUser', { params })
}
// 保存路由菜单
export const saveRouteMenu = params => {
    console.log(params, 'post')
    return api.post('/system/auth/saveRoute', params)
}
// 路由菜单
export const getRouteMenu = params => {
    return api.get('/system/auth/route',  { params })
}
// 保存角色下的资源权限规则
export const saveRolePermission = params => {
    return api.post('/system/auth/saveRolePermission', params)
}
// 删除角色下的资源权限规则
export const delRolePermission = params => {
    return api.post('/system/auth/delRolePermission', params)
}
