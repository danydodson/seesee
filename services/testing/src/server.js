const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port = process.env.TESTING_SERVICE_PORT || 7201
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/test'
console.log(mongoUri)

// connect to the db
const conn = () => {
  mongoose.connect(mongoUri, {
    useNewUrlParser: true
  })
}

// call to connect
conn()

// handle the db connection and retry as needed
const db = mongoose.connection
db.on('error', err => {
  console.log('There was a problem connecting to mongo: ', err)
  console.log('Trying again')
  setTimeout(() => conn(), 5000)
})
db.once('open', () => console.log('Successfully connected to mongo'))

// setup routes to respond to client
app.get('/testing', async (req, res) => {
  console.log('client request received')
  const user = await User.find().exec()
  console.log(user[0].name)
  res.send(`Hello Client ! There's one database record for [${user[0].name}]`)
})

// setup a record in the database to retrieve
const { Schema } = mongoose
const userSchema = new Schema({ name: String }, { timestamps: true })
const User = mongoose.model('User', userSchema)
const user = new User({ name: 'Sir Tests Alot' })
user
  .save()
  .then(user => console.log(`${user.name} saved to the database`))
  .catch(err => console.log(err))

app.listen(port, () => console.log(`[SERVICES] testing service listening on port ${port}`))
