const path = require('path');
const utils = require('./utils.js');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/'
  },
  devServer: {
    port: 8080
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'examples/index.html',
      template: path.resolve('./examples/index.html'),
      favicon: path.resolve('./examples/favicon.ico'),
      chunks: ['examples'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve('./docs/index.html'),
      favicon: path.resolve('./docs/favicon.ico'),
      chunks: ['docs'],
      inject: true
    })
  ]
});
module.exports = webpackConfig;
