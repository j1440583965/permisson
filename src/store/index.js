import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './userInfo'
// import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

export default new Vuex.Store({
    // plugins: [createPersistedState({

    //     storage: window.sessionStorage,
    //     reducer(val) {
    //         console.log(val)
    //         return {
    //             // 只储存state中的assessmentData
    //             token: val.token
    //         }
    //     }

    // })],
    state: {

    },
    mutations: {},
    actions: {},
    modules: {
        userInfo
    }
})