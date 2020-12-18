require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/database')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express()

const users = require('./routes/users')

const env = process.env.NODE_ENV
const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3100

// Check enviornment
if (process.env.NODE_ENV === 'production') {
  return
}

// MongoDB
mongoose.connect(config.database, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to users-api db')
})

// If error
mongoose.connection.on('error', (err) => {
  console.log('Database error  ' + config.database)
})

// Cookies
app.use(cookieParser())

// CORS
app.use(cors())

// Body Parser
app.use(express.json())

// Users
app.use('/api/v1/users', users)

// Start Server
app.listen(port, () => {
  console.log(`Users API started in (${env}) at ${host}:${port}`)
})

