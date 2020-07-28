import expressLoader from '#root/loaders/express'

export default async ({ expressApp }) => {
  await expressLoader({ app: expressApp })
  console.info('🚀🚀 [gateway_client] express setup and loaded 🚀🚀')
}
