// Dates

// let myDate = new Date();
// console.log(myDate);
// // 2023-11-19T03:55:44.583Z

// console.table({
//     1: myDate.toString(),
//     // Sun Nov 19 2023 09:25:44 GMT+0530 (India Standard Time)
//     //
//     2: myDate.toDateString(),
//     // Sun Nov 19 2023
//     //
//     3: myDate.toLocaleString(),
//     // 11/19/2023, 9:25:44 AM
//     //
//     4: myDate.toLocaleTimeString(),
//     // 9:25:44 AM
//     //
//     5: myDate.toLocaleDateString(),
//     // 11/19/2023
//     6: myDate.toISOString(),
//     // 2023-11-19T03:55:44.583Z
//     //
//     7: myDate.toJSON(),
//     // 2023-11-19T03:55:44.583Z
// });

// let yourDate = new Date(2023, 10, 19);
// let yourDate = new Date(2023, 10, 19, 5, 3);
// let yourDate = new Date("2023-01-14");
let yourDate = new Date("11-19-2023");
// console.log(yourDate.toLocaleString());

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(yourDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time is ${newDate.getHours()}`

console.log(newDate.toLocaleString("default", {
    weekday: "long"
}));
