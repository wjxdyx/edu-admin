import api from './index'

// Admin登录
export const adminLogin = params => {
    return api.post('/admin/login/index', params)
}
// 获取用户权限
export const getPermissions = params => {
    return api.post('/admin/index/permission', params)
}
