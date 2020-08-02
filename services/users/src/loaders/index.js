import mongooseLoader from '#root/loaders/mongoose'
import expressLoader from '#root/loaders/express'
import logger from '#root/loaders/logger'

export default async ({ expressApp }) => {
  await mongooseLoader()
  logger.debug('🚀🚀 [users_db] loaded and connected 🚀🚀')
  await expressLoader({ app: expressApp })
  logger.debug('🚀🚀 [users_api] express setup and loaded 🚀🚀')
}
