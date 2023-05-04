"use strict";
// UNION TYPES ------------------------------------------------------
// union types allow us to take in multiple different types in a variable
// like string and a number
// can take in a number or string as a value
// best practie: max limit of data type = 2.
var age;
age = 23;
age = "24";
// TYPE NARROWING
function calculateTax(price, tax) {
    if (typeof price === "string") {
        price = price.replace("$", "");
        return parseFloat(price) * tax;
    }
    else {
        return price * tax;
    }
}
// UNION TYPES AND ARRAYS
var pokemonList = [];
// LITERAL TYPES
// you should not use Literal types like this
var zero = 0;
zero = 1;
var batman = "batman";
batman = "superman";
// a way how you can use literal types in a useful way
// you combind literal types and union types
function giveAnswer(answer) {
    console.log("answer:" + answer);
}
giveAnswer("yes");
giveAnswer("no");
