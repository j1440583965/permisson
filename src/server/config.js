let baseUrl = ''
if (process.env.NODE_ENV === 'development') {
    // baseUrl = 'dev/'
    baseUrl = 'http://139.196.42.209:5004/'

} else if (process.env.NODE_ENV === 'test') {
    baseUrl = 'http://139.196.42.209:5004/'
} else {
    baseUrl = 'http://139.196.42.209:5004/'
}
export default {
    baseUrl,

}