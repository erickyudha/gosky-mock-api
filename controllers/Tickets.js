'use strict';

var utils = require('../utils/writer.js');
var Tickets = require('../service/TicketsService');

module.exports.deleteCarData = function deleteCarData (req, res, next, id) {
  Tickets.deleteCarData(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTicket = function getTicket (req, res, next, category, from, to, departureTime, returnTime) {
  Tickets.getTicket(category, from, to, departureTime, returnTime)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTicketData = function getTicketData (req, res, next, id) {
  Tickets.getTicketData(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putTicketData = function putTicketData (req, res, next, body, id) {
  Tickets.putTicketData(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsIdWishlistDELETE = function ticketsIdWishlistDELETE (req, res, next, id) {
  Tickets.ticketsIdWishlistDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ticketsPOST = function ticketsPOST (req, res, next, body) {
  Tickets.ticketsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wishList = function wishList (req, res, next, id) {
  Tickets.wishList(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.wishlist = function wishlist (req, res, next) {
  Tickets.wishlist()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
