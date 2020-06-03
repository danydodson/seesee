module.exports = {
  apps: [
    {
      name: 'listings-service',
      script: 'build/bundle.js',
      env: {
        PORT: 80,
        NODE_ENV: 'production'
      }
    }
  ]
};
