const path = require('path');
const utils = require('./utils.js');
const webpackConfig = require('./webpack.base.js');

webpackConfig.entry = {
  'mx-ui': './src/index.js'
};

webpackConfig.output = {
  filename: './[name].js',
  library: 'mx-ui',
  // “var” - 以一个变量形式输出： var Library = xxx (default)；
  // “this” - 以 this 的一个属性输出： this[“Library”] = xxx；
  // “commonjs” - 以 exports 的一个属性输出：exports[“Library”] = xxx；
  // “commonjs2” - 以 module.exports 形式输出：module.exports = xxx；
  // “amd” - 以 AMD 格式输出；
  // “umd” - 同时以 AMD、CommonJS2 和全局属性形式输出。
  libraryTarget: 'umd'
};

// 配置externals选项
// 可以为不同导出形式指定不同名称
webpackConfig.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}

module.exports = webpackConfig;
