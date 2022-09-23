const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
// const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const webpack = require("webpack");
// const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = defineConfig({
  configureWebpack: {
     devtool: 'source-map',
    externals: ['worker_threads','ws','perf_hooks', 'child_process'], // exclude nodejs
    plugins: [
      new NodePolyfillPlugin(),
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "*.*",
            context: path.resolve(__dirname, "node_modules/monero-javascript/dist"),
          },
        ]
      }),
    ],
    resolve: {
      alias: {
        // vue: "vue/dist/vue.esm-bundler.js",
        fs: "html5-fs",
      },
      extensions: ["*", ".js", ".json"],
      fallback: { // browser polyfills
        assert: require.resolve('assert'),
        crypto: require.resolve('crypto-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        querystring: require.resolve('querystring-es3'),
        stream: require.resolve('stream-browserify'),
        url: require.resolve('url'),
        util: require.resolve('util'),
        zlib: require.resolve('browserify-zlib')
      }
    }
  },
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
