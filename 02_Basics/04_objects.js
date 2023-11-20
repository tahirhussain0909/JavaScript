// const tiktokUsername = new Object(); // singleton object

const tiktokUser = {}; // literal object

tiktokUser.id = "1234jjt";
tiktokUser.name = "john";

// console.log(tiktokUser);

const firstUser = {
    id: "890tyf",
    name: "tahir",
    email: "tahir@outlook.com",
    fullName: {
        userFullName: {
            firstName: "hussain",
            lastName: "tahir",
        },
    },
};

// console.log(firstUser.fullName.userFullName);

const firstO = { 1: "a", 2: "b" };
const secondO = { 3: "c", 4: "d" };
const thirdO = { 5: "e", 6: "f" };

// const fourthO = Object.assign(firstO, secondO); // this is good
// const fourthO = Object.assign({}, firstO, secondO, thirdO); // this is better

const fiveO = { ...firstO, ...secondO, ...thirdO };
// console.log(fiveO);

const users = [
    {
        id: 1,
        email: "thair@gmail.com",
    },
    {
        id: 2,
        email: "thair@gmail.com",
    },
    {
        id: 3,
        email: "thair@gmail.com",
    },
];

users[1].email;
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
// }

// console.log(tiktokUser);
// console.log(Object.keys(tiktokUser));
// console.log(Object.values(tiktokUser));
// console.log(Object.entries(tiktokUser));

// console.log(tiktokUser.hasOwnProperty("name"));

const cohort = {
    cohortName: "100xDevs 2.0",
    price: "4999",
    courseInstructor: "harkirat singh",
};

// const { courseInstructor } = cohort;
const { courseInstructor: instructor } = cohort;

console.log(instructor);

// what json looks like
// {
//     "name": "hussain",
//     "DOB": "09/03/2003",
//     "height": "6.inch",
// }

[
    {},
    {},
    {}
];
