// var c = 300;

let a = 300;

if (true) {
    let a = 10;
    const b = 20;
    // var c = 30;
    // console.log("INNER: ", a);
}

// core scope is different and coding environment scope is different. -> interview question.

// console.log(a);
// console.log(b);
// console.log(c); // this is why use should never use var.

function one() {
    const username = "tahir hussain";

    function two() {
        const website = "chatgpt.io";

        console.log(username);
    }

    two();
}

// one();

if (!true) {
    const username = "hitesh";
    if (username === "hitesh") {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++ interesting ++++++++++++++++++++++++++++
console.log(addOne(5));

function addOne(num) {
    return num + 1;
}

// addTwo(8); // accessing variable function before initialization this is a little bit of hoisting ( not hosting) this will learn in further topics.

const addTwo = function (num) {
    return num + 1;
};

