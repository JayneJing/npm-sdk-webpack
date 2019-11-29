var path = require('path');
var appPath = path.resolve(__dirname, './test/index.js');
var buildPath = path.resolve(__dirname, './build');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: appPath,
  output: {
    path: buildPath,
    filename: "bundle.js",
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
