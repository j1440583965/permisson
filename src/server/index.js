import axios from 'axios'
import urlConfig from './config'
import store from '../store'
import { Message } from 'element-ui'
import { getToken } from '../utils/token'

const http = axios.create({
    baseURL: urlConfig.baseUrl,
    timeout: 15 * 1000
})

http.interceptors.request.use(config => {
    // config.url = urlConfig.baseUrl + config.url
    let token = getToken()
    token ? config.headers.token = token : ''
    return config
}, error => Promise.reject(error))

http.interceptors.response.use(response => {
    const res = response.data
    if (res.code !== 20000) {
        Message({
            message: res.msg || 'Error',
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(res.msg)
    }
    return res

}, error => Promise.reject(error))

export default http