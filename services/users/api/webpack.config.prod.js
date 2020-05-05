const path = require('path')
const webpack = require('webpack')
const webpackNodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

const config = {
  name: 'server',
  mode: 'production',
  entry: [path.join(CURRENT_WORKING_DIR, './v1/index.js')],
  target: 'node',
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/build/'),
    filename: 'index.js',
    publicPath: './build/',
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
        use: 'file-loader'
      }
    ]
  }
}

module.exports = config
