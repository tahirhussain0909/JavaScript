// for

// for (let i = 0; i <= 10; i++) {
//     console.log({ i });
//     if (i == 5) {
//         console.log("5 is best number");
//     }
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 5; j++) {
//         console.log(`Inner loop value ${j} and inner loop ${i}`);
//     }
// }

// table 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(`table of number: ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// let anArray = ["superman", "wonder woman", "aquaman"];

// for (let i = 0; i < anArray.length; i++) {
//     const element = anArray[i];
//     console.log(element);
// }

//------------------------- break and continue -------------------------

// for (let i = 0; i <= 20; i++) {
//     if (i == 11) {
//         break;
//         console.log("Unreachable code");
//         // now it will break the loop and gets out it
//     }
//     console.log(`Value of i is ${i}`);
// }

for (let i = 0; i <= 20; i++) {
    if (i == 11) {
        console.log("i will be ignored take a view at terminal");
        continue;
    }
    console.log(`Value of i is ${i}`);
}
