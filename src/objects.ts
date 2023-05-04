// OBJECT
const person = {
  name: "marcus",
  age: 29,
  location: "sweden",
};

// TAKE IN OBJECT AS PARAMETER IN A FUNCTION
function printContactDetails(person: {
  name: string;
  age: number;
  location: string;
}): void {
  console.log(person);
}

printContactDetails({ name: "marcus", age: 29, location: "sweden" });

// MORE OBJECT TYPES
function randCoor(coor: { x: number; y: number }): { x: number; y: number } {
  return { y: 3, x: 5 };
}

const sumCoor = randCoor({ x: 3, y: 5 });
console.log(sumCoor);

// TYPE ALIAS
// you create your own reference for a object type
type Point = {
  x: number;
  y: number;
};

function doublePoint(point: Point): Point {
  return { x: 3, y: 2 };
}

// NESTED OBJECTS
const songs: Song = {
  title: "Show must go on",
  artist: "Queen",
  numStreams: 12873342,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

console.log(calculatePayout(songs));

// READONLY
type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 3,
  username: "catman",
};

// read-only allow user to only read a specific data
// won't allow user to replace or override data
console.log(`Id:${user.id}`);
user.id = 4;

// INTERSECTION TYPES
// combine two ALIAS type
type ColorfulCircle = Circle & Colorful;

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

const happyFace: ColorfulCircle = {
  radius: 6,
  color: "red",
};
