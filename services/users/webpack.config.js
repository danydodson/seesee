const path = require('path')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'src', 'index'),
  target: 'node'
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: 'babel-loader',
        // loader: 'babel-loader',
        // query: { presets: [["@babel/env", { "targets": { "browsers": "last 2 chrome versions" } }]] }
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build')
  },
}
