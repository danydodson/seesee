import cors from 'cors'
import express from 'express'

import logger from '../helpers/logger'
import accessEnv from '#root/helpers/accessEnv'
import setupRoutes from './routes'

const PORT = accessEnv('PORT', 7101)

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

setupRoutes(app)

app.use((err, req, res, next) => {
  return res.status(500).json({
    message: err.message
  })
})


app.listen(PORT, '0.0.0.0', (err) => {
  logger.info(`?  users service setup and loaded port: ${PORT}`)
})

export default app