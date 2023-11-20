const user = {
    username: "tahirhussain",
    price: 4999,
    startingDate: "02/DEC/2023",

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to cohort 2.0`);
        console.log(this);
    },
};

// user.welcomeMessage();
// user.username = "hitesh"
// user.welcomeMessage();

// console.log(this);

function jesus() {
    let username = "samar";
    console.log(this.username); // this will give undefined
}

// jesus();

// const christ = function () {
//     let username = "samar";
//     console.log(this.username);
// }

// christ(); // this will also give undefined.

const christ = () => {
    let username = "samar";
    console.log(this);
};

// christ(); // this will give {}

// const addition = (num1, num2) => {
//     return num1 + num2;
// }

// const addition = (num1, num2) => num1 + num2;
const addition = (num1, num2) => ({ username: "tahir hussain" }); // gives undefined when return object without curly braces.

console.log(addition(10, 20));
