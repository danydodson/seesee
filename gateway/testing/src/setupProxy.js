const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(proxy('/testing', { target: 'http://localhost:7201/' }))
}