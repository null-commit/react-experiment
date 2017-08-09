const path = require('path');
const webpack = require('webpack');

const SRC_DIRECTORY = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_DIRECTORY,
  output: {
    path: __dirname+"/dist",
    filename: "index.js"
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        }
      }
    ]
  },
}