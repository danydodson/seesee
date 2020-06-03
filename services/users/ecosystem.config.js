module.exports = {
  apps: [
    {
      name: 'users-service',
      script: 'build/bundle.js',
      env: {
        PORT: 80,
        NODE_ENV: 'production'
      }
    }
  ]
}
