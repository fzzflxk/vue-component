
module.exports = {
  outputDir: '../dist',
  publicPath: '',
  assetsDir: 'static',
  productionSourceMap: false,
  chainWebpack: config => {
    // 设置快捷路径
    config.resolve.alias.set('styles', '@/assets/styles').set('images', '@/assets/images')
  },

  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~styles/var.scss";'
      }
    }
  }
}
