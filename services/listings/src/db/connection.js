import { Sequelize } from 'sequelize'

import accessEnv from '#root/helpers/accessEnv'

const dbURI = accessEnv('DB_URI')

console.log(`[LISTINGS_SERVICE_DB_URI] = ${dbURI}`)

const sequelize = new Sequelize(dbURI, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true
  },
  logging: false
})

export default sequelize
