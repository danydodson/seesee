module.exports = {
  presets: [
    ["@babel/preset-react"],
    ['@babel/preset-env', { targets: { browsers: 'last 2 chrome versions' } }],
  ],
  plugins: [
    ['babel-plugin-styled-components'],
    ['module-resolver', { alias: { '#root': './src' } }],
  ],
}
