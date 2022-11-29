'use strict';


/**
 * Add new transaction
 *  Allowed roles: ADMIN, USER
 *
 * body Transactions_body 
 * returns inline_response_201_2
 **/
exports.addtrans = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "timestamp",
    "amount" : 1,
    "deletedAt" : "timestamp",
    "id" : 1,
    "userId" : 1,
    "ticketId" : 1,
    "updatedAt" : "timestamp"
  },
  "message" : "add transaction success",
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
 * Get transaction by ID
 * USER is only authorized to access transactions made by themself. On other hands ADMIN can access all transactions in database
 *
 * id Integer ID of the transaction to get
 * returns inline_response_200_14
 **/
exports.getTransactionsData = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
    "createdAt" : "timestamp",
    "amount" : 1,
    "deletedAt" : "timestamp",
    "id" : 1,
    "userId" : 1,
    "ticketId" : 1,
    "updatedAt" : "timestamp"
  },
  "message" : "get transaction data success",
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
 * Get transaction list
 * USER is only authorized to access transactions made by themself. On other hands ADMIN can access all transactions in database.    Allowed roles: USER, ADMIN
 *
 * returns inline_response_200_13
 **/
exports.trs = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "departureTime" : "timestamp",
    "imageId" : "string",
    "updatedBy" : 1,
    "description" : "string",
    "wishlisted" : false,
    "returnTime" : "timestamp",
    "flightNumber" : "string",
    "createdAt" : "timestamp",
    "deletedAt" : "timestamp",
    "createdBy" : 1,
    "price" : 980000,
    "imageUrl" : "string.com/image.png",
    "from" : "JAKARTA",
    "id" : 1,
    "to" : "MEDAN",
    "category" : "ONE_WAY",
    "updatedAt" : "timestamp"
  }, {
    "departureTime" : "timestamp",
    "imageId" : "string",
    "updatedBy" : 1,
    "description" : "string",
    "wishlisted" : false,
    "returnTime" : "timestamp",
    "flightNumber" : "string",
    "createdAt" : "timestamp",
    "deletedAt" : "timestamp",
    "createdBy" : 1,
    "price" : 980000,
    "imageUrl" : "string.com/image.png",
    "from" : "JAKARTA",
    "id" : 1,
    "to" : "MEDAN",
    "category" : "ONE_WAY",
    "updatedAt" : "timestamp"
  } ],
  "meta" : {
    "count" : 1
  },
  "message" : "get transaction list data success",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

