const express = require('express')

const app = express()

// const PORT = accessEnv('PORT', 7100)
const PORT = 7100

const listener = app.listen(PORT, "0.0.0.0", () => {
  console.info(`listings-service listening on port ${listener.address().port}`)
})

module.exports = listener