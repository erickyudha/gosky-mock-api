'use strict';

var utils = require('../utils/writer.js');
var Images = require('../service/ImagesService');

module.exports.addImg = function addImg (req, res, next, type) {
  Images.addImg(type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteImage = function deleteImage (req, res, next, imageId) {
  Images.deleteImage(imageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
