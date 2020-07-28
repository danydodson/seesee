"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _Profile = _interopRequireDefault(require("../models/Profile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
@desc get all profiles
@route GET /api/profiles/all
@auth public
*/
var _default = (0, _expressAsyncHandler.default)(async (req, res, next) => {
  console.debug('⏳⏳ [service] calling get all profiles endpoint ! ⏳⏳');
  let profiles = await _Profile.default.find();
  return res.json(profiles);
});

exports.default = _default;