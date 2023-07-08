
// Assignment 1: 
//Question 1: passing function as a parameter to another function

function first(i, j) {
    let sum = i + j;
    return sum;
}

function second(func) {
    console.log("Sum of 2 numbers : " + func(1,2));
}

// pass first function as a parameter to second function
second(first);

//Question 2: arrow function

let getFirstCharFunc = (a,b) => {
    return a.charAt(0) + b.charAt(0);
};

console.log(getFirstCharFunc("Good", "Morning"));

//Question: Refactor
// const printName = (name) => {
//     return “Hi” + name;
// }
const printName = (name) => {return "Hi " + name};
console.log(printName("xyz"));

//Question: Refactor
// const printBill = (name, bill) => {
//     return “Hi “ + name + “, please pay: “ + bill;
// }
const printBill = (name, bill) => {
    return `Hi  + ${name} + , please pay:  + ${bill}`;
}
console.log(printBill("xyz",100))

//Question:
const person = {
    name:"Noam Chomsky",
    age:92
}
const {name: personName, age: personAge} = person;

console.log("name " + personName + " and age " + personAge);




