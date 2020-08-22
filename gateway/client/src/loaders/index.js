import expressLoader from '#root/loaders/express'
import logger from '#root/loaders/logger'

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp })
  logger.debug('🚀🚀 [gateway_client] express setup and loaded 🚀🚀')
}
