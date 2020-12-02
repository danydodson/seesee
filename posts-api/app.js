require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/database')
const app = express()

const posts = require('./routes/posts')

const env = process.env.NODE_ENV
const host = process.env.HOST
const port = process.env.PORT || 3200

// MongoDB
mongoose.connect(config.database, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

// On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to posts-api db')
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
app.use('/api/v1/posts', posts)

// Start Server
app.listen(port, () => {
  console.log(`Posts API started in (${env}) at ${host}:${port}`)
})
