const path = require('path');
const webpack = require('webpack');

const SRC_DIRECTORY = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_DIRECTORY,
  output: {
    path: __dirname+"/dist",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['','.coffee','.js']
  }
}