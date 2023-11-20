const marvel = ["thor", "Iron man ", "spider man"];
const dc = ["flash", "batman", "wonder woman"];

// marvel.push(dc);

// console.log(marvel);
// console.log(marvel[3]);
// console.log(marvel[3][0]);

// const genV = marvel.concat(dc);
// console.log(genV);

// const all_Heros = [...marvel, ...dc];
// console.log(all_Heros);

// const otherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

// const realArray = otherArray.flat(Infinity);
// console.log(realArray);

console.log(Array.isArray("tahir", "hussain")); // false
console.log(Array.isArray(["tahir", "hussain"])); // true

console.log(Array.from("tahir"));
console.log(Array.from("123456789"));
console.log(Array.from({name: "tahir"})); // interesting interview question


let rollNo = "22BC8010";
let rollNo2 = "22BC8009";
let rollNo3 = "22BC8008";

console.log(Array.of(rollNo, rollNo2, rollNo3));