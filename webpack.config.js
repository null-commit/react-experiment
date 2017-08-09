const path = require('path');
const webpack = require('webpack');

const SRC_DIRECTORY = path.resolve(__dirname, 'src');
const DIST_DIRECTORY = path.resolve(__dirname, 'dist');

module.exports = {
  entry: SRC_DIRECTORY,
  output: {
    path: DIST_DIRECTORY,
    filename: "index.js",
    libraryTarget: 'umd',
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
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { name: '[name].[ext]' }
        }
      }
    ]
  },
}