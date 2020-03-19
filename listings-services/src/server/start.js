const express = require('express')

const app = express()

// const PORT = accessEnv('PORT', 7000)
const PORT = 7000

const listener = app.listen(PORT, "0.0.0.0", () => {
  console.info(`api-gateway listening on port ${listener.address().port}`)
})

module.exports = listener