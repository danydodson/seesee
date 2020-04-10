const express = require('express')

const PORT = 3001;
const HOST = '0.0.0.0'

const app = express();

app.get('/', (req, res) => {
  res.send('Hello remote world!\n')
})

app.listen(PORT, HOST)
console.log(`Test API running on http://${HOST}:${PORT}`)