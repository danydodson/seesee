import winston from 'winston'
import config from './config'

let transports

let ds = new Date()
let date = ds.toLocaleString()
const logFormat = winston.format.printf(info => {
  return `${date}, ${JSON.stringify(info.message, null, 4)}\n`
})

if (process.env.NODE_ENV !== 'development') {
  transports = new winston.transports.Console()

} else {
  transports = [
    new winston.transports.File({
      filename: '../../logs/info.log',
      level: 'info',
    }),
    new winston.transports.File({
      filename: '../../logs/debug.log',
      level: 'debug',
    }),
    new winston.transports.File({
      filename: '../../logs/data.log',
      level: 'data'
    }),
    new winston.transports.File({
      filename: '../../logs/errors.log',
      level: 'error'
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.cli(),
        winston.format.splat(),
        winston.format.json(),
      )
    }),
  ]
}

const LoggerInstance = winston.createLogger({
  levels: winston.config.npm.levels,
  level: config.logLevel,

  format: winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.errors({ stack: true }),
    winston.format.colorize(),
    logFormat,
  ),
  transports
})

export default LoggerInstance