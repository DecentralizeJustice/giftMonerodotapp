const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
// const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const webpack = require("webpack");
// const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = defineConfig({
  configureWebpack: {
    entry: {
      main: "./src/main.js",
    },
    module: {
      rules: [
        // {
        //   test: /\.js$/,
        //   exclude: /node_modules/,
        //   use: {
        //     loader: "babel-loader",
        //   },
        // },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false
          }
        },
        // {
        //   test: /\.vue$/,
        //   loader: "vue-loader",
        // },
        // {
        //   test: /\.css$/,
        //   use: ["style-loader", "css-loader"],
        //   sideEffects: true
        // }
      ],
    },
    externals: ['worker_threads','ws','perf_hooks', 'child_process'], // exclude nodejs
    plugins: [
      // new VueLoaderPlugin(),
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
        //buffer: require.resolve('buffer'),
        //console: require.resolve('console-browserify'),
        //constants: require.resolve('constants-browserify'),
        crypto: require.resolve('crypto-browserify'),
        //domain: require.resolve('domain-browser'),
        //events: require.resolve('events'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        os: require.resolve('os-browserify/browser'),
        path: require.resolve('path-browserify'),
        //punycode: require.resolve('punycode'),
        //process: require.resolve('process/browser'),
        querystring: require.resolve('querystring-es3'),
        stream: require.resolve('stream-browserify'),
        //string_decoder: require.resolve('string_decoder'),
        //sys: require.resolve('util'),
        //timers: require.resolve('timers-browserify'),
        //tty: require.resolve('tty-browserify'),
        url: require.resolve('url'),
        util: require.resolve('util'),
        //vm: require.resolve('vm-browserify'),
        zlib: require.resolve('browserify-zlib')
      }
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
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
