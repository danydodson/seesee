const express = require('express')

const app = express()

const PORT = accessEnv("PORT", 7777)

const listener = app.listen(PORT, "0.0.0.0", () => {
  console.info(`API gateway listening on port ${listener.address().port}`)
})

module.exports = app