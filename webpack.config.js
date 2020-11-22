var webpack = require('webpack');
const path=require('path')
console.log('xx')
module.exports = {
  entry: './src/index.js', //入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'//出口名称
  }
}