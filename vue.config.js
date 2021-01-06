module.exports = {
    lintOnSave: false,
    publicPath: "./",
    devServer: {
        open: true,
        proxy: {
            'dev/': {
                target: 'http://139.196.42.209:5004/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^dev/': ''
                }
            }
        }
    }
}