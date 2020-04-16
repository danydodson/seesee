export default {
  app: {
    apiPrefix: '/api',
    port: parseInt(process.env.PORT, 10),
  },

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  url: {
    api: process.env.BASE_URL,
    client: process.env.BASE_URL_CLIENT,
  },

  mongo: 'mongodb://usersdb'
  // process.env.NODE_ENV === 'production'
  // ? 'mongodb://usersdb'
  // : 'mongodb://usersdb'
}