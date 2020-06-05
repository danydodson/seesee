const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  mode: 'production',
  watch: true,
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
      }
    ]
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    chunkFilename: '[name].js'
  }
}