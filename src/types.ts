// Annontations -----------------------------------------------

// string
const firstName: string = "marcus";
console.log(typeof firstName);

// int
const myNumber: number = 3;
console.log(typeof myNumber);

// boolean
const areYouReady: boolean = true;
console.log(typeof areYouReady);

// TYPE INFERENCE -------------------------------------------

// string
let tvShow2 = "Vikings";

// number
const myNumber2 = 3;

// boolean
const areYouReady2 = true;

// ANY TYPE ---------------------------------------------------

// this is a escape hatch! it turns off type checking for this variable
const anyVariable: any = "I'm going to any location";

// WHEN TO USE ANNOTATION TYPE ----------------------------------------

// usually when you declare a variable without asigne a value to it
// if we don't add an annotion type it be assigne as any type variable
let theNumber: number;
theNumber = 2;
console.log(typeof theNumber);
