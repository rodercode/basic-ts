// INTERFACES

// interface serve almost the exact same purpose as type aliases
// with a slightly different syntax

// interface allow us to describe the shape of objects
interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "marcus", age: 29 };
