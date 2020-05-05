import { connect } from 'mongoose'
import logger from '../helpers/logger'
import config from '../config'

const mongoConnection = () => {
  connect(config.mongoUri, config.mongoOptions)
    .then(() => {
      logger.info(` ✨ [Mongo] loaded and connected`)
    }).catch(err => {
      logger.error(` ❗ ${err}`)
    })
}

mongoConnection()