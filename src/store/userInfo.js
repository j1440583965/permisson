import { userInfo } from '../server/api'
import { asyncRouters } from '../router/routerList'
import { assembleRouter, filterRouter } from '../utils/permisson'
import { setToken, removeToken } from '../utils/token'
export default {
    namespaced: true,
    state: {
        userName: '',
        routerList: []
    },
    mutations: {

        setUserInfo(state, { token, userName }) {
            setToken(token)
            state.userName = userName
        },

        removeUserInfo(state) {
            removeToken()
            state.userName = ''
            state.routerList = []
        },
        setRoles(state, routerList) {
            state.routerList = routerList
        }
    },
    actions: {

        setUserInfo({ commit }, obj) {
            commit('setUserInfo', obj)
        },

        removeUserInfo({ commit }) {
            commit('removeUserInfo')
        },
        getUserInfo({ commit }) {
            return new Promise((resolve, reject) => {
                userInfo().then(res => {
                    // commit('getUserInfo', res.data.roles)
                    resolve(res.data.roles)
                }).catch(err => reject(err))
            })
        },
        getRouterList({ commit }, roleName) {
            return new Promise((resolve, reject) => {
                let targetList = asyncRouters
                if (roleName !== 'administrator') {
                    // 不等于超管   去获取对应的路由表
                    targetList = filterRouter(targetList, roleName)
                }
                // 超管全部添加
                targetList = assembleRouter(targetList)
                commit('setRoles', targetList)
                targetList.push({ path: '*', redirect: '/404' })
                resolve(targetList)
            })
        },
    },
}