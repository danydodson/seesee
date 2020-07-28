"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.POSTS_SERVICE = exports.PROFILES_SERVICE = exports.USERS_SERVICE = void 0;

var _isDocker = _interopRequireDefault(require("is-docker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let USERS_SERVICE, PROFILES_SERVICE, POSTS_SERVICE;
exports.POSTS_SERVICE = POSTS_SERVICE;
exports.PROFILES_SERVICE = PROFILES_SERVICE;
exports.USERS_SERVICE = USERS_SERVICE;

if ((0, _isDocker.default)()) {
  exports.USERS_SERVICE = USERS_SERVICE = 'http://users_service:5000/api/users';
  exports.PROFILES_SERVICE = PROFILES_SERVICE = 'http://profiles_service:6000/api/profiles';
  exports.POSTS_SERVICE = POSTS_SERVICE = 'http://posts_service:7000/api/posts';
}

if (!(0, _isDocker.default)()) {
  exports.USERS_SERVICE = USERS_SERVICE = 'http://localhost:5000/api/users';
  exports.PROFILES_SERVICE = PROFILES_SERVICE = 'http://localhost:6000/api/profiles';
  exports.POSTS_SERVICE = POSTS_SERVICE = 'http://localhost:7000/api/posts';
}