"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _accessEnv = _interopRequireDefault(require("../helpers/accessEnv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authMiddleware = async (req, res, next) => {
  const header = req.header('Authorization');
  if (typeof header === 'undefined') return next;
  const token = header.replace('Bearer ', '');
  if (!token) return next;

  const decoded = _jsonwebtoken.default.verify(token, (0, _accessEnv.default)('JWT_SECRET'));

  req.user = decoded;
  next();
};

var _default = authMiddleware;
exports.default = _default;