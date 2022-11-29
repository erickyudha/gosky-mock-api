'use strict';


/**
 * Delete tickets data by ID
 * Allowed roles: ADMIN
 *
 * id Integer ID of ticket to delete
 * returns inline_response_200_9
 **/
exports.deleteCarData = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "delete ticket data success",
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
 * Get ticket
 * Get ticket list data. Filter using query params.
 *
 * category String  (optional)
 * from String  (optional)
 * to String  (optional)
 * departureTime String  (optional)
 * returnTime String  (optional)
 * returns inline_response_200_6
 **/
exports.getTicket = function(category,from,to,departureTime,returnTime) {
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
  "message" : "get ticket list data success",
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
 * Get ticket data by ID
 *
 * id Integer ID of ticket data to get
 * returns inline_response_200_7
 **/
exports.getTicketData = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
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
  },
  "message" : "get ticket data success",
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
 * Update ticket data by ID
 * Allowed roles: ADMIN
 *
 * body Tickets_id_body  (optional)
 * id Integer ID of ticket to update
 * returns inline_response_200_8
 **/
exports.putTicketData = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
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
  },
  "message" : "update ticket data success",
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
 * Remove ticket from user wishlist
 *  Allowed roles: ADMIN, USER
 *
 * id Integer ID of ticket to remove from wishlist
 * returns inline_response_200_12
 **/
exports.ticketsIdWishlistDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "unwish ticket success",
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
 * Add new ticket
 *  Allowed roles: ADMIN
 *
 * body Tickets_body 
 * returns inline_response_201_1
 **/
exports.ticketsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : {
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
  },
  "message" : "add ticket data success",
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
 * Add a ticket to wishlist
 *  Allowed roles: ADMIN, USER
 *
 * id Integer ID of ticket to add to wishlist
 * returns inline_response_200_11
 **/
exports.wishList = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "message" : "wishlist ticket success",
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
 * Get user wishlist data
 * Allowed roles: ADMIN, USER
 *
 * returns inline_response_200_10
 **/
exports.wishlist = function() {
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
  "message" : "get ticket wishlist data success",
  "status" : "success"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

