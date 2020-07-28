"use strict";

var _express = _interopRequireDefault(require("express"));

var _accessEnv = _interopRequireDefault(require("../helpers/accessEnv"));

var _loaders = _interopRequireDefault(require("../loaders"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ENV = (0, _accessEnv.default)('NODE_ENV');
const PORT = (0, _accessEnv.default)('PORT');
const HOST = (0, _accessEnv.default)('HOST');
const app = (0, _express.default)();

const startServer = async () => {
  await (0, _loaders.default)({
    expressApp: app
  });
  app.listen(PORT, e => {
    if (e) {
      console.error(e);
      process.exit(1);
      return;
    }

    console.info(`🚀🚀 [gateway_client] listening on ${HOST}:${PORT} in [${ENV}] 🚀🚀`);
  });
};

startServer();