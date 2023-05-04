"use strict";
// ARRAY ------------------------------------
// TYPE OF EMPTY ARRAY --------------------------
var activeUsers = [];
// you can't add item to an array type of empty array
activeUsers.push("steven");
// TYPE OF ARRAY ------------------------------------
// same as in variable ts will look at value types and assign a type to the array automatic.
// string array
var users = ["marcus", "johan", "niko", "lisa"];
// number array
var numbers = [1, 2, 3, 4, 5];
// we need to add type annontion if an array is empty at the beginning
var testArray = [];
// AN ALTERNATIVE FOR TYPE OF ARRAY ---------------------------------------------
// boolean array
var bools = [];
// string array
var words = [];
// assign type Point to array
var listOfCoor = [];
// MULTIDIMENSIONAL ARRAYS
var board = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
