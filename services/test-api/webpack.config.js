const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const CURRENT_WORKING_DIR = process.cwd()

module.exports = {
  name: 'server',
  mode: 'development',
  entry: [path.join(CURRENT_WORKING_DIR, './v2/server.js')],
  target: 'node',
  output: {
    path: path.join(CURRENT_WORKING_DIR, '/build/'),
    filename: 'index.js',
    publicPath: '/build/',
  },
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
}
