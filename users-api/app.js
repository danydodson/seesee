require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/database')
const cors = require('cors')
const app = express()

const users = require('./routes/users')

const env = process.env.NODE_ENV
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

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

// CORS
app.use(cors())

// Body Parser
app.use(express.json());

// Users
app.use('/api/v1/users', users)

// Start Server
app.listen(port, () => {
  console.log(`Users API started in (${env}) at ${host}:${port}`)
})
