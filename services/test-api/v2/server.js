import config from './config/config'
import app from './express'
import mongoose from 'mongoose'
import logger from './config/logger'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    logger.error(` ❗ ${err}`)
  }
  logger.info(` ✨ Server started on port ${config.port}`)
})
