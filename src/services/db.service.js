const Sequelize = require('sequelize')
const globalConfig = require('../config/global.config').globalConfig
const mentors = require('../entities/mentors.entity')

const { db } = globalConfig

const sequelize = new Sequelize(db.dbName, db.user, db.password, {
  host: db.host,
  dialect: 'postgres',
  port: Number(db.port),
})

const initDb = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log(
        'Connection to the database has been established successfully.'
      )
      mentors(sequelize)
      sequelize.sync({ force: true }).then(() => console.log('sync done'))
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err)
    })
}

module.exports = { sequelize, initDb }
