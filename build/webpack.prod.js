const path = require('path');
const utils = require('./utils.js');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: './',
    filename: 'static/js/[name].[chunkhash].js',
    chunkFilename: 'static/js/[id].[chunkhash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: path.resolve('./dist/examples.html'),
      template: path.resolve('./examples/index.html'),
      favicon: path.resolve('./examples/favicon.ico'),
      chunks: ['examples'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      filename: path.resolve('./dist/index.html'),
      template: path.resolve('./docs/index.html'),
      favicon: path.resolve('./docs/favicon.ico'),
      chunks: ['docs'],
      inject: true
    })
  ]
});
module.exports = webpackConfig;
