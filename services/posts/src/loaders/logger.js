import winston from 'winston'

import accessEnv from '#root/helpers/accessEnv'

let transports
let ds = new Date()
let date = ds.toLocaleString()
const logFormat = winston.format.printf(info => {
  return `${date}, ${JSON.stringify(info.message, null, 4)}\n`
})

if (accessEnv('NODE_ENV') !== 'development') {
  transports = new winston.transports.Console()
} else {
  transports = [
    new winston.transports.File({ filename: 'logs/info.log', level: 'info', }),
    new winston.transports.File({ filename: 'logs/debug.log', level: 'debug', }),
    new winston.transports.File({ filename: 'logs/data.log', level: 'data' }),
    new winston.transports.File({ filename: 'logs/errors.log', level: 'error' }),
    new winston.transports.Console({ format: winston.format.combine() }),
  ]
}
const logger = winston.createLogger({
  levels: winston.config.npm.levels,
  level: accessEnv('LOG_LEVEL'),
  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.colorize(),
    logFormat,
  ),
  transports
})

export default logger