"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = _interopRequireDefault(require("winston"));

var _accessEnv = _interopRequireDefault(require("../helpers/accessEnv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let transports;
let ds = new Date();
let date = ds.toLocaleString();

const logFormat = _winston.default.format.printf(info => {
  return `${date}, ${JSON.stringify(info.message, null, 4)}\n`;
});

if ((0, _accessEnv.default)('NODE_ENV') !== 'development') {
  transports = new _winston.default.transports.Console();
} else {
  transports = [new _winston.default.transports.File({
    filename: 'logs/info.log',
    level: 'info'
  }), new _winston.default.transports.File({
    filename: 'logs/debug.log',
    level: 'debug'
  }), new _winston.default.transports.File({
    filename: 'logs/data.log',
    level: 'data'
  }), new _winston.default.transports.File({
    filename: 'logs/errors.log',
    level: 'error'
  }), new _winston.default.transports.Console({
    format: _winston.default.format.combine()
  })];
}

const logger = _winston.default.createLogger({
  levels: _winston.default.config.npm.levels,
  level: (0, _accessEnv.default)('LOG_LEVEL'),
  format: _winston.default.format.combine(_winston.default.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }), _winston.default.format.errors({
    stack: true
  }), _winston.default.format.colorize(), logFormat),
  transports
});

var _default = logger;
exports.default = _default;