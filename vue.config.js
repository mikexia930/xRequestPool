module.exports = {
  publicPath: '/xRequestPool',
  outputDir:'docs',
  productionSourceMap: process.env.NODE_ENV === 'dev',
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'dev' ? 'source-map' : undefined,
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'localhost', // 表示启动的时候使用的域名，默认可以不写，则是使用localhost和本机IP
    port: '8081', // 设置端口号
    https: false, // 是否使用https协议
    proxy: {
      '/api': {
        target: 'http://localhost:8998', // API服务器的地址
        ws: true, // 代理websockets
        changeOrigin: true, // 是否跨域，虚拟的站点需要更管origin
        pathRewrite: {
          '^/api/': '/',
        },
      },
    },
  },
};
