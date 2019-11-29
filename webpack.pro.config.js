var path = require('path');
var appPath = path.resolve(__dirname, './src/index.js');
var buildPath = path.resolve(__dirname, './lib');
module.exports = {
  entry: appPath,
  output: {
    path: buildPath,
    libraryTarget: "umd",
    publicPath: "/lib/",
    filename: "index.js",
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
