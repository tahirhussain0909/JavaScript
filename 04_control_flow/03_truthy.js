// const userEmail = "tahir@gmail.com";

// if (userEmail) {
//     console.log(`got user email: ${userEmail}`);
// } else {
//     console.log("don't have user email");
// }

/**
 *  falsy values:
 *
 *  false, 0, -0, BigInt 0n, "", null, undefined, NaN
 *
 *  truthy values:
 *
 *  "0", "false", " ", [], {}, function () {},
 */

// const user = [];
// if (user.length === 0) {
//     console.log("array is empty");
// }

// const emptyObject = {};
// if (Object.keys(emptyObject).length === 0) {
//     console.log("object is empty");
// }

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

val1 = null ?? 10 ?? 20;

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


