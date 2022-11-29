'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.getUserDataEmail = function getUserDataEmail (req, res, next, email) {
  Auth.getUserDataEmail(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next, body) {
  Auth.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.registerMember = function registerMember (req, res, next, body) {
  Auth.registerMember(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.whoAmI = function whoAmI (req, res, next) {
  Auth.whoAmI()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
