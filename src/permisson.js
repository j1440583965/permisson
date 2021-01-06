import router from './router'
import store from './store'
const whiteList = ['/login']
import { getToken } from './utils/token'

router.beforeEach(async(to, from, next) => {
    //  administrator  超管
    //  approve 贷款审批人员
    // input 销售
    //白名单直接放行
    if (whiteList.indexOf(to.path) !== -1) {
        next()
    } else {
        // 有token 
        if (getToken()) {
            //判断有无路由信息
            var userRoles = store.state.userInfo.routerList.length
            console.log('userRoles', userRoles)

            if (userRoles) {
                //有路由信息  说明已经添加了路由 放行
                next()
                return
            }
            // 无路由信息  说明首次进入  或者刷新了页面
            try {
                // 获取用户信息
                let roleName = await store.dispatch('userInfo/getUserInfo')
                    // 根据用户信息  获取对应的路由表
                roleName = roleName[0].name
                console.log('roleName', roleName)

                let routerList = await store.dispatch('userInfo/getRouterList', roleName)

                console.log('routerList', routerList)
                    // 动态添加
                router.addRoutes(routerList)

                next({...to, replace: true })

            } catch (error) {
                console.log(error)
            }
        } else {
            //无token  跳转至登录页
            next({ path: '/login?redirect=' + to.path, replace: true })
        }

    }



})