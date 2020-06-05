const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  watch: true,
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        query: {
          presets: [["@babel/env", { "targets": { "browsers": "last 2 chrome versions" } }]]
        }
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, './build'),
    publicPath: '/build/',
    chunkFilename: '[name].js'
  },
}