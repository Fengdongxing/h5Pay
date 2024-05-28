const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: './',
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    /*proxy: {
      '/api': {
        target: 'http://py.ruanlan.top/',
        changeOrigin: true
      },
    }*/
  },
})
