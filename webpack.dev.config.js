var path = require('path');
var appPath = path.resolve(__dirname, './src/index.js');
var buildPath = path.resolve(__dirname, './build');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: appPath,//整个页面的入口文件
  output: {
    path: buildPath,//打包输出的地址
    filename: "bundle.js",//输出的文件名称
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets=es2015'
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader?limit=8192&name=asset/[hash:8].[name].[ext]'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './test/index.html',
      chunksSortMode: 'none'
    }),
  ]
}
