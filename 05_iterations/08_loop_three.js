const newArray = [1, 2, 3];

// const sum = newArray.reduce((accumulator, currentValue) => {
// console.log(`acc: ${accumulator} and currval: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0);

const sum = newArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);

// console.log(sum);

const shoppingCart = [
    {
        courseName: "android",
        price: 4999,
    },
    {
        courseName: "react",
        price: 8999,
    },
    {
        courseName: "ios",
        price: 12000,
    },
];

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(price);