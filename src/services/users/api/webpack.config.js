const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './v1/index.js',
  externals: [webpackNodeExternals()],
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
  target: 'node'
}
