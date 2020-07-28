"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _errors = _interopRequireDefault(require("../middleware/errors"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const expressLoader = ({
  app: app
}) => {
  app.get('/profiles/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/profiles/status', (req, res) => {
    res.status(200).end();
  });
  app.enable('trust proxy');
  app.use((0, _cors.default)({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
    preflightContinue: true,
    exposedHeaders: ['Access-Control-Allow-Headers', 'Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept', 'X-Password-Expired'],
    optionsSuccessStatus: 200
  }));
  app.use((0, _helmet.default)());
  app.use(_express.default.json());
  app.use('/api', (0, _routes.default)());
  app.use(_errors.default.notFound);
  app.use(_errors.default.serverErrors);
  app.use(_errors.default.unauthErrors);
};

var _default = expressLoader;
exports.default = _default;