// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: {
            NODE_ENV: '"production"'
        },
        index: path.resolve(__dirname, '../../content/index.html'),
        assetsRoot: path.resolve(__dirname, '../'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/homework/phpcms/templates/default/content_vue/',
        productionSourceMap: true,
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: {
            NODE_ENV: '"development"'
        },
        port: 8000,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        context: [
            '/shopping',
            '/ugc',
            '/v1',
            '/v2',
            '/v3',
            '/v4',
            '/bos',
            '/member',
            '/promotion',
            '/eus',
            '/payapi',
            '/img',
            '/test.php',
            '/index.php'
        ],
        proxypath: 'http://localhost/homework/',
        /*proxyTable: {
            '/api': {
                target: 'http://www.nu85m.com',  //目标接口域名
                changeOrigin: true,  //是否跨域
                pathRewrite: {
                    '^/api': '/api'   //重写接口
                }
            }
        },*/
        cssSourceMap: false
    }
}
