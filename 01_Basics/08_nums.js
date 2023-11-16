const marks = 800;
console.log(marks);

const rupees = new Number(600);
console.log(rupees);
console.log(typeof rupees);

const dollars = rupees.toString().length;
console.log(dollars);
console.log(typeof dollars);

console.log(rupees.toFixed(2));

const otherNumber = 1123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1_000_000;
console.log(typeof hundreds);
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"));
