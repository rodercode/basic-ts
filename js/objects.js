"use strict";
// OBJECT
var person = {
    name: "marcus",
    age: 29,
    location: "sweden",
};
// TAKE IN OBJECT AS PARAMETER IN A FUNCTION
function printContactDetails(person) {
    console.log(person);
}
printContactDetails({ name: "marcus", age: 29, location: "sweden" });
// MORE OBJECT TYPES
function randCoor(coor) {
    return { y: 3, x: 5 };
}
var sumCoor = randCoor({ x: 3, y: 5 });
console.log(sumCoor);
function doublePoint(point) {
    return { x: 3, y: 2 };
}
// NESTED OBJECTS
var songs = {
    title: "Show must go on",
    artist: "Queen",
    numStreams: 12873342,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};
function calculatePayout(song) {
    return song.numStreams * 0.0033;
}
console.log(calculatePayout(songs));
var user = {
    id: 3,
    username: "catman",
};
// read-only allow user to only read a specific data
// won't allow user to replace or override data
console.log("Id:" + user.id);
user.id = 4;
var happyFace = {
    radius: 6,
    color: "red",
};
