const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  devtool: 'source-map',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, '/build/'),
    compress: true,
    inline: true,
    host: 'localhost',
    port: 7000,
  },
}