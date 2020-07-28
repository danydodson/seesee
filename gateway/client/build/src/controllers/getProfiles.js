"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _got = _interopRequireDefault(require("got"));

var _adapters = require("../adapters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@desc get all profiles controller
@route GET /gallery
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get all profiles controller endpoint ! ⏳⏳');
  const profiles = await _got.default.get(`${_adapters.PROFILES_SERVICE}/all`).json();
  return res.json(profiles);
});

exports.default = _default;