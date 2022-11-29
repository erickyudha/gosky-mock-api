'use strict';


/**
 * Edit logged in user data
 * Update user data    Allowed roles: ADMIN, USER
 *
 * body Users_body Allowed fields to update: [name, phone, address imageId, imageUrl] (optional)
 * returns inline_response_200_3
 **/
exports.editUserData = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "userData" : {
      "createdAt" : "timestamp",
      "deletedAt" : "timestamp",
      "role" : "USER",
      "address" : "string",
      "imageId" : "string",
      "phone" : "0856xxxxxxxx",
      "imageUrl" : "string.com/image.png",
      "name" : "user",
      "id" : 1,
      "email" : "user@email.com",
      "encryptedPassword" : "string",
      "updatedAt" : "timestamp"
    },
    "accessToken" : "string"
  },
  "message" : "update user data success",
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
 * Get user data by ID
 *
 * id Integer ID of the user to get
 * returns inline_response_200_2
 **/
exports.getUserData = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "role" : "USER",
    "imageUrl" : "string.com/image1.png",
    "name" : "user",
    "id" : 1
  },
  "message" : "get user data success",
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
 * Update logged in user email
 * Allowed roles: ADMIN, USER
 *
 * body Users_email_body 
 * returns inline_response_200_5
 **/
exports.usersEmailPUT = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "userData" : {
      "createdAt" : "timestamp",
      "deletedAt" : "timestamp",
      "role" : "USER",
      "address" : "string",
      "imageId" : "string",
      "phone" : "0856xxxxxxxx",
      "imageUrl" : "string.com/image.png",
      "name" : "user",
      "id" : 1,
      "email" : "user@email.com",
      "encryptedPassword" : "string",
      "updatedAt" : "timestamp"
    },
    "accessToken" : "string"
  },
  "message" : "update user email success",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

