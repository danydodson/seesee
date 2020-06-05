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
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'out'),
    publicPath: '/out/',
    chunkFilename: '[name].js'
  }
}