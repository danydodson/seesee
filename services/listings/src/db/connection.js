import { Sequelize } from 'sequelize'

import accessEnv from '#root/helpers/accessEnv'

const dbUri = accessEnv('DB_URI')

console.log(`[LISTINGS_DB_URI] = ${dbUri}`)

const sequelize = new Sequelize(dbUri, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true
  },
  logging: false
})

export default sequelize
