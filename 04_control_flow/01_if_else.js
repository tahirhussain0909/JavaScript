const isUserLoggedIn = true;

// if (2 == 2) {
//     console.log("check it");
// }

// === this also checks the data type example:-
// if (2 === "2") {
//     console.log(
//         "this will not execute because values are same but data type is different"
//     );
// }

// this !== also checks data type
// if (2 !== 3) {
//     console.log("check it");
// }

// <, >, <=, >=, ==, !=, ===, !==

// if (2 != 3) {
//     console.log("executed");
// }

// const temperature = 41;
// if (temperature === 40) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// const score = 200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }

// const recharge = 1000;
// // if (recharge > 500) console.log("single line function");

// if (recharge < 500) {
//     console.log("less than");
// } else if (recharge < 750) {
//     console.log("less than 750");
// } else if (recharge < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}
