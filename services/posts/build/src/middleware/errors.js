"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  notFound: (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  },
  unauthErrors: (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({
        message: err.message
      }).end();
    }

    return next(err);
  },
  serverErrors: (err, req, res, next) => {
    err.stack = err.stack || '';
    const status = err.status || 500;
    const error = {
      message: err.message
    };
    res.status(status);
    res.json({
      error
    });
  }
};
exports.default = _default;