const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const initDb = require('./services/db.service').initDb
const globalConfig = require('./config/global.config').globalConfig

const {
  app: { port },
} = globalConfig

dotenv.config()

const app = express()

initDb()

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use(helmet())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed due to SIGTERM signal')
  })
})
