import { connect } from 'mongoose'
import configs from './config'
import logger from './logger'

const mongoConnection = () => {
  connect(configs.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    logger.info(` ✨ DB mongodb loaded and connected`)
  }).catch(err => {
    logger.error(` ❗ ${err}`)
  })
}

mongoConnection()
