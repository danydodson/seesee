const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/dist/',
    chunkFilename: '[name].js'
  }
}