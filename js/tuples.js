"use strict";
// TUPLES ----------------------------------------------------------
// they only exist in TS not JS
// tuples are arrays with a fixed length and order of types
var myTuple;
myTuple = [1, 2, 3, 4];
var goodRes = [200, "OK"];
// we can't change the order in a tuple
// weird thing is that we can push more item into the tuple
// even tho tuple have a fixed length
goodRes.push(123);
// weird thing also you can remove item from a fixed tuple:xD
goodRes.pop();
goodRes.pop();
console.log(goodRes);
