const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  outputDir: 'dist',
  assetsDir: './static',
  indexPath: './index.html',
  lintOnSave: true,
  transpileDependencies: [],
  productionSourceMap: false,
  devServer: {
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
      }
    }
  }
}