const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  devServer: {
    open: true,
    disableHostCheck: true,
    proxy: {
      // 接口是 '/repos' 开头的才用代理
      '/api': {
        target: 'http://localhost:8040', // 目标地址
        changeOrigin: true, // 是否改变源地址
        // pathRewrite: {'^/api': ''}
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_views', resolve('src/views'))
      .set('_com', resolve('src/components'))
      .set('_img', resolve('src/images'))
      .set('_ser', resolve('src/services'))
  },
}
