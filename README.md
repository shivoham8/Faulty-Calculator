# Faulty Calculator

## Description
A simple JavaScript program embedded in an HTML file that takes two numbers as input, performs mathematical operations, and outputs the results based on a random condition.

## Usage
1. Open the HTML file in a web browser.
2. Enter the first and second numbers when prompted.
3. The program will perform calculations based on a random condition and display the results in the console.

## JavaScript Code
```javascript
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));

let add = a + b;
let subtract = a - b;
let divide = a / b;
let multiply = a * b;

let c = Math.random() * 100;

if (c < 10) {
    console.log("The sum of two numbers is " + subtract);
    console.log("The difference between two numbers is " + divide);
    console.log("The division of two numbers is " + multiply);
    console.log("The product of two numbers is " + add);
} else {
    console.log("The sum of two numbers is " + add);
    console.log("The difference between two numbers is " + subtract);
    console.log("The division of two numbers is " + divide);
    console.log("The product of two numbers is " + multiply);
}
```
