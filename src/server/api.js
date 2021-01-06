import http from './'

function parseUrl(obj) {
    var str = '?'
    for (var key in obj) {
        str += key + '=' + obj[key] + '&'
    }
    return str
}
export function login(data) {
    return http.post('api/user/login', data)
}
export function userInfo() {
    return http.get('api/user/info')
}
export function logout() {
    return http.post('api/user/logout')
}
export function createUser(data) {
    return http.post('api/permission/createUser', data)
}
export function userList() {
    return http.get('api/user/list')
}
export function firstList(data) {
    return http.get('api/approve/first/list' + parseUrl(data))
}
export function finalList(data) {
    return http.get('api/approve/end/list' + parseUrl(data))
}
export function upload(data) {
    return http.get('api/contract/download' + parseUrl(data))
}
export function createFile(data) {
    return http.post('api/contract/createFile', data)
}
export function uploadFile(data) {
    return http.get(data)
}