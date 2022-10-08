export default [
    {
        url: '/mock/member/login',
        method: 'post',
        response: option => {
            return {
                msg: '',
                code: 101,
                data: {
                    account: option.body.account,
                    token: '@string',
                    failure_time: Math.ceil(new Date().getTime() / 1000) + 24 * 60 * 60
                }
            }
        }
    },
    {
        url: '/mock/member/permission',
        method: 'get',
        response: option => {
            let permissions = []
            if (option.query.account == 'admin') {
                permissions = 'admin'
            } else if (option.query.account == 'test') {
                permissions = [
                    'permission.browse'

                ]
            }
            return {
                error: '',
                code: 101,
                data: {
                    permissions
                }
            }
        }
    },
    {
        url: '/mock/member/edit/password',
        method: 'post',
        response: {
            error: '',
            status: 1,
            data: {
                isSuccess: true
            }
        }
    }
]
