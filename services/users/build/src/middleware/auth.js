"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _accessEnv = _interopRequireDefault(require("../helpers/accessEnv"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const authMiddleware = async (req, res, next) => {
  const header = req.header('Authorization');
  if (typeof header === 'undefined') return next;
  const token = header.replace('Bearer ', '');
  if (!token) return next;

  const decoded = _jsonwebtoken.default.verify(token, (0, _accessEnv.default)('JWT_SECRET'));

  const user = await _User.default.findOne({
    _id: decoded._id,
    'tokens.token': token
  });
  if (!user) return next;
  req.token = token;
  req.user = user;
  next();
};

var _default = authMiddleware;
exports.default = _default;