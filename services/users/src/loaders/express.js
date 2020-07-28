import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from '#root/routes'
import errors from '#root/middleware/errors'

const expressLoader = ({ app: app }) => {

  app.get('/users/status', (req, res) => {
    res.status(200).end()
  })

  app.head('/users/status', (req, res) => {
    res.status(200).end()
  })

  app.enable('trust proxy')

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

  app.use(helmet())
  app.use(express.json())
  app.use('/api', routes())

  app.use(errors.notFound)
  app.use(errors.serverErrors)
  app.use(errors.unauthErrors)

}

export default expressLoader