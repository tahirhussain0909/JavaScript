function theName() {
    console.log("T");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("R");
}

// theName();

// function addTwoDigits(num1, num2) {
//     console.log(num1 + num2);
// }

// const result = addTwoDigits(10,20); // value stored in result is undefined because before function addTwoDigits not returning nothing and now returning. -> // tricky interview question.

function addTwoDigits(num1, num2) {
    return num1 + num2;
}

// console.log(addTwoDigits(10, 20));
// console.log(addTwoDigits((num1 = 10), 20));
// console.log(addTwoDigits((num1 = 10), (num2 = 20)));

// const result = addTwoDigits(10, 20);
// console.log(result);

function loginUserMessage(username) {
    return `${username} just logged in.`;
}

// console.log(loginUserMessage()); // prints undefined -> interview question.
// console.log(loginUserMessage("tahir"));

// function calculateCartPrice(...num1) {
//     return num1;
// }

function calCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500));
console.log(calCartPrice(200, 400, 500, 500)); // return an array of two [500, 500] because the 200, 400 are stored in val1 and val 2 -> important interview question.

const user = {
    username: "tahir",
    price: "4999",
};

function handleObject(anyObject) {
    console.log(
        `Username is ${anyObject.username} and price is ${anyObject.price}`
    );
}

// handleObject(user);
handleObject({
    username: "tahir",
    price: "499",
});

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray) {
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
