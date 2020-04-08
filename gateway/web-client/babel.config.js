module.exports = {
  plugins: [
    [
      'module-resolver', { alias: { '#root': './v1' } }
    ]
  ],

  presets: [
    [
      '@babel/preset-env', { targets: { node: 'current' } }
    ]
  ]
}
