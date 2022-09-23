const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "",
  transpileDependencies: [
    'quasar'
  ],

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  }
})
