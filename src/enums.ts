// ENUMS --------------------------------------------

// it allow us to define a set of named constants
// basically enums is a list of constant values

const PENDING: number = 0;
const SHIPPING: number = 1;
const DELIVERED: number = 3;

enum OrderStatus {
  PENDING,
  SHIPPING,
  DELIVERED,
  RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status:OrderStatus){
    return status === OrderStatus.DELIVERED
}
