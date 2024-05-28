const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // proxy: 'http://py.ruanlan.top/',
    proxy: {
      '/api': {
        target: 'http://py.ruanlan.top/',
        changeOrigin: true
      },
    }
  },
})
