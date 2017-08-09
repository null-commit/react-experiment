const path = require('path');
const webpack = require('webpack');

const SRC_DIRECTORY = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_DIRECTORY,
  output: {
    path: __dirname+"/dist",
    filename: "index.js"
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
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