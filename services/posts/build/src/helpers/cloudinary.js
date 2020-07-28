"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFromCloudinary = exports.uploadToCloudinary = void 0;

var _cloudinary = _interopRequireDefault(require("cloudinary"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_cloudinary.default.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});
/**
 *  Uploads file to Cloudinary CDN
 *
 *  @param {stream} object, image streaming content
 *  @param {folder} string, folder name, where to save image
 *  @param {string} imagePublicId
 */


const uploadToCloudinary = async (stream, folder, imagePublicId) => {
  // if imagePublicId param is presented we should overwrite the image
  const options = imagePublicId ? {
    public_id: imagePublicId,
    overwrite: true
  } : {
    public_id: `${folder}/${(0, _uuid.default)()}`
  };
  return new Promise((resolve, reject) => {
    const streamLoad = _cloudinary.default.v2.uploader.upload_stream(options, (error, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });

    stream.pipe(streamLoad);
  });
};
/**
 *  Deletes file from Cloudinary CDN
 *
 *  @param {string} publicId id for deleting the image
 */


exports.uploadToCloudinary = uploadToCloudinary;

const deleteFromCloudinary = async publicId => {
  return new Promise((resolve, reject) => {
    _cloudinary.default.v2.uploader.destroy(publicId, (error, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
};

exports.deleteFromCloudinary = deleteFromCloudinary;