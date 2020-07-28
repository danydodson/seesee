"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _services = _interopRequireDefault(require("../services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc change a users password
@route POST /api/users/change-password
@auth private
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  const userServiceInstance = new _services.default();
  const {
    jsonMsg
  } = await userServiceInstance.testingService();
  return res.json({
    jsonMsg
  });
});

exports.default = _default;