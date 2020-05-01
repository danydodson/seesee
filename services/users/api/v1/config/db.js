import { connect } from 'mongoose'
import logger from '../helpers/logger'
import config from '../config'

const mongoConnection = () => {
  connect(config.mongoUri, config.mongoOptions)
    .then(() => {
      logger.info(` ✨ DB mongodb loaded and connected`)
    }).catch(err => {
      logger.error(` ❗ ${err}`)
    })
}

mongoConnection()