// let a = parseInt(prompt("Enter first number"));
// let b = parseInt(prompt("Enter second number"));

// let add = a + b;
// let subtract = a - b;
// let divide = a / b;
// let multiply = a * b;

// let c = (Math.random()) * 100;

// if(c < 10) {
//     console.log("The sum of two numbers is " + subtract);
//     console.log("The difference between two numbers is " + divide);
//     console.log("The division of two numbers is " + multiply);
//     console.log("The product of two numbers is " + add);
// } 
//  else {
//     console.log("The sum of two numbers is " + add);
//     console.log("The difference between two numbers is " + subtract);
//     console.log("The division of two numbers is " + divide);
//     console.log("The product of two numbers is " + multiply);
//  }

let random = Math.random();

let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter second number");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "*"
}

if(random > 0.1) {
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
} 

else {
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}   
