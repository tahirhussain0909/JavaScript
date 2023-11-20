// const anCoding = ["ruby", "scala", "clojure", "solidity"];

// const values = anCoding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const values = myNum.filter((num) => {
//     return num > 4;
// });

const values = myNum.filter((num) => num > 4);

// console.log(values);

const books = [
    {
        title: "Book1",
        genre: "fiction",
        publish: "1981",
        edition: "first-edition",
    },
    {
        title: "Book2",
        genre: "non-fiction",
        publish: "1990",
        edition: "third-edition",
    },
    {
        title: "Book3",
        genre: "history",
        publish: "1900",
        edition: "forth-edition",
    },
    {
        title: "Book4",
        genre: "drama",
        publish: "2000",
        edition: "ninth-edition",
    },
    {
        title: "Book5",
        genre: "history",
        publish: "2055",
        edition: "first-edition",
    },
];

let userBooks = books.filter((bk) => bk.genre === "history");

userBooks = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === "history";
});

console.log(userBooks);
