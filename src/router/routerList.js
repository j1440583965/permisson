export const asyncRouters = [{
    path: '/',
    name: 'Layout',
    component: 'layout',
    meta: {},
    children: [{
        path: '/home',
        name: 'home',
        meta: { title: '首页' },
        component: 'views/Home',
    }, {
        path: '/loan-application',
        name: 'loan-application',
        meta: { title: '贷款申请' },
        component: 'views/Loan-application'
    }, {
        path: '/loan-approve',
        name: 'loan-approve',
        meta: { title: '贷款审批', roles: ['approve'] },
        component: 'views/Loan-approve',
        children: [{
            path: '/loan-approve/firstTrial',
            name: 'firstTrial',
            meta: { title: '初审', roles: ['approve'] },
            component: 'views/Loan-approve/firstTrial'
        }, {
            path: '/loan-approve/finalTrial',
            name: 'finalTrial',
            meta: { title: '终审', roles: ['approve'] },
            component: 'views/Loan-approve/finalTrial'
        }]
    }, {
        path: '/authority',
        name: 'authority',
        meta: { title: '权限管理', roles: ['administrator'] },
        component: 'views/Authority',
        children: [{
            path: '/authority/create',
            name: 'create',
            meta: { title: '创建用户', roles: ['administrator'] },
            component: 'views/Authority/create'
        }, {
            path: '/authority/authorityList',
            name: 'authorityList',
            meta: { title: '权限列表', roles: ['administrator'] },
            component: 'views/Authority/AuthorityList'
        }]
    }, {
        path: '/404',
        name: '404',
        component: 'views/PageError'

    }]
}]