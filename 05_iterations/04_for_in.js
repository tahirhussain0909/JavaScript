const myObject = {
    js: "javaScript",
    cpp: "C++",
    java: "JAVA",
};

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const anArray = ["js", "ruby", "py", "java", "cpp"];
for (const key in anArray) {
    // console.log(key);
}

// const map = new Map();
// map.set("IN", "India");
// map.set("US", "United States");
// map.set("CA", "California");

// for (const key in map) {
//     console.log(key);    // will not print anything
// }