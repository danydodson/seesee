const express = require('express')

const PORT = 7100;
const HOST = '0.0.0.0'

const app = express();

app.get('/api', (req, res) => {
  res.send('Hello api!\n')
})

app.get('/api/hi', (req, res) => {
  res.send('Hello api hi!\n')
})

app.listen(PORT, HOST)

console.log(`Test API running on http://${HOST}:${PORT}`)