const path = require('path');
const utils = require('./utils.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const webpackConfig = {
  context: path.resolve('./'),
  entry: {
    examples: './examples/main.js',
    docs: './docs/main.js'
  },
  output: {
    path: path.resolve('./dist')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      '@': path.resolve('src'),
      '@mx-ui': path.resolve('src'),
      '@examples': path.resolve('examples'),
      '@docs': path.resolve('docs'),
      '@utils': path.resolve('utils')
    },
    extensions: ['.js', '.vue', '.json'] // './folder' => './folder/index.vue'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [utils.resolve('src'), utils.resolve('docs'), utils.resolve('examples')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/fonts/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: {
              raw: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
module.exports = webpackConfig;
