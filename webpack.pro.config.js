var path = require('path');
var appPath = path.resolve(__dirname, './src/index.js');
var buildPath = path.resolve(__dirname, './dist');
module.exports = {
  entry: appPath,//整个页面的入口文件
  output: {
    path: buildPath,//打包输出的地址
    filename: "index.js",//输出的文件名称
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015'
      }
    ]
  },
}
