// FUNCTIONS PARAMETER TYPES -------------------------------------

// in typescript we want to add type to a function always. to avoid ts to assigne this function as 'any type'

function addition(numOne: number, numTwo: number) {
  return numOne + numTwo;
}

const sum = addition(1, 2);
console.log(`sum is: ${sum}`);

// DEFAULT FUNCTION PARAMETERS ---------------------------------------------
function greet(person: string = "unknown") {
  return ` Hi ${person}`;
}

const message = greet();
console.log(message);

// RETURN TYPE ANNOTATIONS --------------------------------------------------

// we can tell a function what type it should return
// and it will make it more clear and less bugs will appear.
// best practice is to return type annotations to functions.
function substraction(number: number): number {
  return number - 3;
}

const totalSum = substraction(2);
console.log(totalSum);

// THE VOID TYPE
// best practice is to return type annotations to functions.
// void does return value type undefind
function notReturn(): void {
  return undefined;
}
notReturn();

// THE TYPE NEVER
// never don't return anything at all
// best practice is to return type annotations to functions.
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Running!");
  }
}




