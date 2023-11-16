const name = "tahir";
const repoCount = 15;

// console.log(name + repoCount + " Value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const pcName = new String("hussain-th-com");

// console.log(pcName);

// console.log(pcName[0]);
// console.log(pcName.__proto__);

// console.log(pcName.length);

// console.log(pcName.toUpperCase());
// console.log(pcName);

// console.log(pcName.charAt(2));

// console.log(pcName.indexOf("s"));

// const newString = pcName.substring(-8, 4);
const newString = pcName.substring(0, 4);
console.log(newString);

const anotherString = pcName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "  tahir  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));

console.log(pcName.split("-"));
