require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./config/database')

const app = express()
const port = process.env.PORT || 3050
const posts = require('./routes/posts')

// MongoDB
mongoose.connect(config.database, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

//On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to posts-api db') // + config.database
})
//If error
mongoose.connection.on('error', (err) => {
  console.log('Database error  ' + config.database)
})

//CORS
app.use(cors())
//Body Parser
app.use(bodyParser.json())

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

//Posts
app.use('/api/v1/posts', posts)

//Start Server
app.listen(port, () => {
  console.log('Posts server started on port ' + port)
})

//Routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })
