"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc gateway client controller test endpoint
@route GET /gallery/testing
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [gateway_service] calling client controller test endpoint ! ⏳⏳');
  const jsonMsg = '👍👍 [gateway_service] client test controller endpoint working ! 👍👍';
  return res.json({
    msg: jsonMsg
  });
});

exports.default = _default;