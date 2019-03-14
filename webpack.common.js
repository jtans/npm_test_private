const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var utils = require('./config');
var glob = require('glob')
//当前工作目录的绝对路径
var ROOT_PATH = path.resolve(__dirname);
//要打包的源代码路径
var RESOURCES_PATH = path.resolve(ROOT_PATH, 'src');
//设置要打包的js文件为入口文件
var entrys = utils.getEntries(path.join(RESOURCES_PATH, '/*.js'), path.join(RESOURCES_PATH, '/'));

module.exports = {
  entry: entrys,
  devServer: {
      contentBase: './dist'
  },
  plugins: [
      new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}