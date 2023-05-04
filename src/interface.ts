// INTERFACES

// interface serve almost the exact same purpose as type aliases
// with a slightly different syntax

// interface allow us to describe the shape of objects
interface Person {
  name: string;
  age: number;
}
const person: Person = { name: "marcus", age: 29 };

// READONLY AND OPTIONAL INTERFACE
interface PersonTwo {
  readonly id: number; // fixed value
  name: string;
  age: number;
  nickname?: string; // this is optional
}

const personTwo: PersonTwo = { id: 1, name: "marcus", age: 29 };

// INTERFACE METHODS

interface PersonThree {
  readonly id: number; // fixed value
  name: string;
  age: number;
  nickname?: string; // this is optional
  sayHi: (name: string) => string; // method that return a string
}

const personThree: PersonThree = {
  id: 1,
  name: "marcus",
  age: 29,
  sayHi: (name: string) => {
    return "hello!";
  },
};

// INTERFACE METHOD PARAMETERS

interface Product{
    name: string,
    price:number,
    applyDiscount(discount:number):number;
}

const shoe: Product = {
    name:"nike",
    price:200,
    applyDiscount(amount:number){
        return 2;
    }
}
