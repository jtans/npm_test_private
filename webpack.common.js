const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    11111: './src/index.js'
    // print: './src/print.js'
  },
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
};