// 

const presets = [
  ['@babel/env', {
    targets: { browsers: 'last 2 chrome versions' },
    useBuiltIns: 'usage',
    corejs: 3,
  }],
]

const plugins = [
  ['module-resolver', {
    alias: { '#root': './src' }
  }],
]

const ignore = ['node_modules', 'build', '.vscode']

module.exports = { presets, plugins, ignore }