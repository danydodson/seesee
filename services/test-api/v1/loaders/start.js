import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'

import logger from '../helpers/logger'
import accessEnv from '#root/helpers/accessEnv'
// import setupRoutes from './routes'


const port = accessEnv('PORT', 7100)
const host = '0.0.0.0'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: [
      'Access-Control-Allow-Headers',
      'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
      'X-Password-Expired'
    ],
    optionsSuccessStatus: 200
  })
)

app.get("/welcome", async (req, res) => {
  console.log("Client request received")
  const user = await User.find().exec()
  console.log(user[0].name)
  res.send(
    `Hello Client! There is one record in the database for ${user[0].name}`
  )
})

const { Schema } = mongoose
const userSchema = new Schema({ name: String }, { timestamps: true })
const User = mongoose.model("User", userSchema)
const user = new User({ name: "Big Bill Brown" })
user
  .save()
  .then(user => console.log(`${user.name} saved to the database`))
  .catch(err => console.log(err))

// setupRoutes(app)

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message
  })
})

// logger.info(accessEnv('PORT'))

app.listen(port, '0.0.0.0', (err) => {
  logger.info(` ✋  users service setup and loaded port: ${port}`)
})
