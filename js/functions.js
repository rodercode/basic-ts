"use strict";
// FUNCTIONS PARAMETER TYPES -------------------------------------
// in typescript we want to add type to a function always. to avoid ts to assigne this function as 'any type'
function addition(numOne, numTwo) {
    return numOne + numTwo;
}
var sum = addition(1, 2);
console.log("sum is: " + sum);
// DEFAULT FUNCTION PARAMETERS ---------------------------------------------
function greet(person) {
    if (person === void 0) { person = "unknown"; }
    return " Hi " + person;
}
var message = greet();
console.log(message);
// RETURN TYPE ANNOTATIONS --------------------------------------------------
// we can tell a function what type it should return
// and it will make it more clear and less bugs will appear.
// best practice is to return type annotations to functions.
function substraction(number) {
    return number - 3;
}
var totalSum = substraction(2);
console.log(totalSum);
// THE VOID TYPE
// best practice is to return type annotations to functions.
// void does return value type undefind
function notReturn() {
    return undefined;
}
notReturn();
// THE TYPE NEVER
// never don't return anything at all
// best practice is to return type annotations to functions.
function makeError(msg) {
    throw new Error(msg);
}
function gameLoop() {
    while (true) {
        console.log("Running!");
    }
}
