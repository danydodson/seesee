"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var _accessEnv = _interopRequireDefault(require("../helpers/accessEnv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const URI = (0, _accessEnv.default)('MONGO_ATLAS_URI');
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
};

const mongooseLoader = async () => {
  try {
    const connection = await (0, _mongoose.connect)(URI, OPTIONS);
    return connection.connection.db;
  } catch (e) {
    return console.error(`🔥🔥 [posts_db_error] ${e} 🔥🔥`);
  }
};

var _default = mongooseLoader;
exports.default = _default;