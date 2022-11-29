'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.editUserData = function editUserData (req, res, next, body) {
  Users.editUserData(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getUserData = function getUserData (req, res, next, id) {
  Users.getUserData(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usersEmailPUT = function usersEmailPUT (req, res, next, body) {
  Users.usersEmailPUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
