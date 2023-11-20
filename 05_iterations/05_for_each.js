const coding = ["js", "rb", "java"];

// coding.forEach(function (val) {
//     console.log(val);
// });

// coding.forEach((item) => {
//     console.log(item);
// });

// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// });

const anCoding = [
    {
        languageName: "javascript",
        languageFileName: "js",
    },
    {
        languageName: "java",
        languageFileName: "java",
    },
    {
        languageName: "ruby",
        languageFileName: "rb",
    },
];

anCoding.forEach((item) => {
    console.log(item.languageName);
});
