// # Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 12343434323255351232n;

// # Reference (Non primitive)

// Array, Objects, Functions

const heros = ["krish", "sing is king", "son of sardar"];

let myObj = {
    name: "tahir",
    age: 22,
};

const myFunction = function () {
    console.log("Hello, World");
};

// https://262.ecma-international.org/5.1/#sec-11.4.3