import mongooseLoader from '#root/loaders/mongoose'
import expressLoader from '#root/loaders/express'

export default async ({ expressApp }) => {
  await mongooseLoader()
  console.info('🚀🚀 [posts_db] loaded and connected 🚀🚀')
  await expressLoader({ app: expressApp })
  console.info('🚀🚀 [posts_api] express setup and loaded 🚀🚀')
}
