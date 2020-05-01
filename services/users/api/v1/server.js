import app from './express'
import config from './config'
import logger from './helpers/logger'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, config.mongoOptions)
mongoose.connection.on('error', () => {
  throw new Error(` ❗ unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    logger.error(` ❗ ${err}`)
  }
  logger.info(` ✨ Server started on port ${config.port}`)
})
