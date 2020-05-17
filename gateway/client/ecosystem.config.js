module.exports = {
  apps: [
    {
      name: "gateway-client",
      script: "dist/bundle.js",
      env: {
        PORT: 80,
        NODE_ENV: "production"
      }
    }
  ]
}
