module.exports = {

  plugins: [
    [
      'module-resolver', { alias: { '#root': './v2' } },
    ]
  ],
  presets: [
    [
      '@babel/preset-env', { targets: { node: 'current' } },
    ]
  ]

}
