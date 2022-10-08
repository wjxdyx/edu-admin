import api from '@/api'

import useRouteStore from './route'
import useMenuStore from './menu'
import { adminLogin, getPermissions } from '@/api/user'

const useUserStore = defineStore(
    // 唯一ID
    'user',
    {
        state: () => ({
            account: localStorage.account || '',
            token: localStorage.token || '',
            failure_time: localStorage.failure_time || '',
            permissions: [],
            auto_comlete: [ ]
        }),
        getters: {
            isLogin: state => {

                let retn = false
                if (state.token) {
                    if (new Date().getTime() < state.failure_time * 1000) {
                        retn = true
                    }
                }
                return retn
            },
            autoComlete: state => {

                return state.auto_comlete
            }
        },
        actions: {
            // 输入库的下拉补全 历史搜索词
            setAutoComlete(keyObj) {

                this.auto_comlete.push(keyObj)
            },

            login(data) {

                return  adminLogin(data).then(r => {

                    console.log(r)
                    localStorage.setItem('account', r.data.username)
                    localStorage.setItem('token', r.token)
                    localStorage.setItem('failure_time', r.data.failure_time)
                    this.account = r.data.username
                    this.token = r.token
                    this.failure_time = r.data.failure_time
                }).catch(err => {
                    console.log(err)
                })
                // return new Promise((resolve, reject) => {

                //     // 通过 mock 进行登录
                //     api.post('/system/auth/login', data).then(res => {
                //         console.log('store.login', res)
                //         res.data.failure_time = Math.ceil(new Date().getTime() / 1000) + 24 * 60 * 60
                //         localStorage.setItem('account', res.data.account)
                //         localStorage.setItem('token', res.data.token)
                //         localStorage.setItem('failure_time', res.data.failure_time)
                //         this.account = res.data.account
                //         this.token = res.data.token
                //         console.log('store.state.token', this.token, res.data.token)

                //         this.failure_time = res.data.failure_time
                //         resolve()
                //     }).catch(error => {
                //         console.log(3)
                //         reject(error)
                //     })
                // })
            },
            logout() {
                return new Promise(resolve => {
                    const routeStore = useRouteStore()
                    const menuStore = useMenuStore()
                    localStorage.removeItem('account')
                    localStorage.removeItem('token')
                    localStorage.removeItem('failure_time')
                    this.account = ''
                    this.token = ''
                    this.failure_time = ''
                    routeStore.removeRoutes()
                    menuStore.setActived(0)
                    resolve()
                })
            },
            // 获取我的权限
            getPermissions() {

                return new Promise(resolve => {
                    getPermissions().then(res => {
                        this.permissions = res.data
                        resolve(res.data)
                    })
                })
            },
            editPassword(data) {
                return new Promise(resolve => {
                    api.post('member/edit/password', {
                        account: this.account,
                        password: data.password,
                        newpassword: data.newpassword
                    }, {
                        baseURL: '/mock/'
                    }).then(() => {
                        resolve()
                    })
                })
            }
        }
    }
)

export default useUserStore
