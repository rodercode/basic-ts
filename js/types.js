"use strict";
// Annontations -----------------------------------------------
// string
var firstName = "marcus";
console.log(typeof firstName);
// int
var myNumber = 3;
console.log(typeof myNumber);
// boolean
var areYouReady = true;
console.log(typeof areYouReady);
// TYPE INFERENCE -------------------------------------------
// string
var tvShow2 = "Vikings";
// number
var myNumber2 = 3;
// boolean
var areYouReady2 = true;
// ANY TYPE ---------------------------------------------------
// this is a escape hatch! it turns off type checking for this variable
var anyVariable = "I'm going to any location";
// WHEN TO USE ANNOTATION TYPE ----------------------------------------
// usually when you declare a variable without asigne a value to it
// if we don't add an annotion type it be assigne as any type variable
var theNumber;
theNumber = 2;
console.log(typeof theNumber);
