require('dotenv').config()

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./config/database')

const app = express()
const port = process.env.PORT || 3000
const users = require('./routes/users')

//MongoDB
mongoose.connect(config.database, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

//On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to users-api db') // + config.database
})
//If error
mongoose.connection.on('error', (err) => {
  console.log('Database error  ' + config.database)
})

//CORS
app.use(cors())
//Body Parser
app.use(bodyParser.json())

//Passport
// app.use(passport.initialize())
// app.use(passport.session())

// //JWT
// require('./config/passport')(passport)

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

//Users
app.use('/api/v1/auth', users)

//Start Server
app.listen(port, () => {
  console.log('Users server started on port ' + port)
})

//Routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public/index.html'))
// })
