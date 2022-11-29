'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.addtrans = function addtrans (req, res, next, body) {
  Transactions.addtrans(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransactionsData = function getTransactionsData (req, res, next, id) {
  Transactions.getTransactionsData(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.trs = function trs (req, res, next) {
  Transactions.trs()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
