const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
        // query: { presets: [["@babel/env", { "targets": { "browsers": "last 2 chrome versions" } }]], }
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/build/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/build/'),
    inline: true,
    host: 'localhost',
    port: 7000,
  },
}