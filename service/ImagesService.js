'use strict';


/**
 * Upload image to server
 * USER is only authorized to access PROFILE_IMG type, ADMIN can access both.   Allowed roles: ADMIN, USER
 *
 * type String 
 * returns inline_response_201_3
 **/
exports.addImg = function(type) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "imageId" : "image1",
    "imageUrl" : "string.com/image1.png"
  },
  "message" : "upload image success",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete image data by ID
 * USER is only authorized to access PROFILE_IMG type, ADMIN can access both.   Allowed roles: ADMIN, USER
 *
 * imageId String 
 * returns inline_response_200_15
 **/
exports.deleteImage = function(imageId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "delete image success",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

