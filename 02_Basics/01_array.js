// array

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["iron man", "superman"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

//--------------------Array methods-------------------------------

// myArr.push(6);
// myArr.pop();
// myArr.push(7);

// myArr.unshift(9);
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

//--------------------slice, splice---------------------------------

console.log("A ", myArr);
const myNewArray = myArr.slice(1, 3);

console.log(myNewArray);
console.log("B ", myArr);

const myNewArray2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myNewArray2);
