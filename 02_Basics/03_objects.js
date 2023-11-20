// singleton

// object literals

const symbol = Symbol("key2345");

const JsUSer = {
    name: "tahir",
    "full name": "tahir hussain",
    [symbol]: "myKey",
    age: 21,
    location: "Bissau",
    email: "tahir7598@gmail.com",
    isLoggedIn: false, 
    lastLoginDays: ["monday", "sunday"],
};

// console.log(JsUSer.email);
// console.log(JsUSer["email"]);
// console.log(JsUSer["full name"]);
// console.log(JsUSer[symbol]);

// JsUSer.email = "tahir@yahoo.com";
// Object.freeze(JsUSer);
// JsUSer.email = "hussain@gmail.com";
// console.log(JsUSer);

JsUSer.greeting = function () {
    console.log(`hello, ${this["full name"]}`);
};

console.log(JsUSer.greeting());
