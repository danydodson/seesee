"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("./express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = async ({
  expressApp
}) => {
  await (0, _express.default)({
    app: expressApp
  });
  console.info('🚀🚀 [gateway_client] express setup and loaded 🚀🚀');
};

exports.default = _default;