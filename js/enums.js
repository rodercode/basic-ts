"use strict";
// ENUMS --------------------------------------------
// it allow us to define a set of named constants
// basically enums is a list of constant values
var PENDING = 0;
var SHIPPING = 1;
var DELIVERED = 3;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPPING"] = 1] = "SHIPPING";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
var myStatus = OrderStatus.DELIVERED;
function isDelivered(status) {
    return status === OrderStatus.DELIVERED;
}
