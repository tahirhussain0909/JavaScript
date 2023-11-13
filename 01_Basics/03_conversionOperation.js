let score = "33abc";

// console.log(typeof score);
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "tahir";

let booleanIsLoggedIN = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIN);

// 1 => true; 0 => false
// "" => false
// "tahir" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof stringNumber);

// console.log(typeof stringNumber);

// ************************************** Operations *************************************

let value = 3;
let negValue = -value;
// console.log(negValue);

let str1 = "hello";
let st2 = " tahir";

let str3 = str1 + st2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log((3 + 4) * 5 % 3);

// above expression are not good practice and is a bad habit

// console.log(+true);
// console.log(+"");


let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;

console.log(gameCounter);

let x2 = 3n;

const y2 = x2++;

console.log(`x2 is ${x2}n; y2 is ${y2}n`);