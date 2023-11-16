// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

// Stack (Primitive), Heap (Non-Primitive)

let myChildhoodName = "Sonu";

let anotherName = myChildhoodName;
anotherName = "hussain";

console.log(myChildhoodName);
console.log(anotherName);

console.log();

let user = {
    email: "test@gmail.com",
    upi: "user@ibl",
};

let userTwo = user;

userTwo.email = "tahir@outlook.com";

console.log(user.email);
console.log(userTwo.email);

// Stack is (Call by Value), and Heap is (Call by Reference)
