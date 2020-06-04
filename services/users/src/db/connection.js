import { Sequelize } from 'sequelize'

import accessEnv from '#root/helpers/accessEnv'

const DBURI = accessEnv('DB_URI')

console.log(`[DB_URI] = ${DBURI}`)

const sequelize = new Sequelize(DBURI, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true
  },
  logging: false
})

export default sequelize
