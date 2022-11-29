'use strict';


/**
 * Get OTP for email confirmation
 * Return otp token, OTP is sent to corresponding email
 *
 * email String 
 * returns inline_response_200_4
 **/
exports.getUserDataEmail = function(email) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "otpToken" : "string"
  },
  "message" : "otp request success",
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
 * Login with account
 * Login and get access token for auth
 *
 * body Auth_login_body 
 * returns inline_response_200
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "accessToken" : "string"
  },
  "message" : "login success",
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
 * Register new user
 * Register new account with USER role
 *
 * body Auth_register_body 
 * returns inline_response_201
 **/
exports.registerMember = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "accessToken" : "string"
  },
  "message" : "register success",
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
 * Get current user data
 * Return current user data based on bearer token    Allowed roles: USER, ADMIN
 *
 * returns inline_response_200_1
 **/
exports.whoAmI = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
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

