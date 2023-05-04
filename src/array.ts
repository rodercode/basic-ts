// ARRAY ------------------------------------

// TYPE OF EMPTY ARRAY --------------------------
const activeUsers: [] = [];

// you can't add item to an array type of empty array
activeUsers.push("steven");

// TYPE OF ARRAY ------------------------------------

// same as in variable ts will look at value types and assign a type to the array automatic.

// string array
const users = ["marcus", "johan", "niko", "lisa"];

// number array
const numbers = [1, 2, 3, 4, 5];

// we need to add type annontion if an array is empty at the beginning
const testArray: string[] = [];

// AN ALTERNATIVE FOR TYPE OF ARRAY ---------------------------------------------

// boolean array
const bools: Array<boolean> = [];

// string array
const words: string[] = [];

// ARRAY CUSTOM TYPES

// custom type
type Point = {
  x: number;
  y: number;
};

// assign type Point to array
const listOfCoor: Point[] = [];

// MULTIDIMENSIONAL ARRAYS
const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];


