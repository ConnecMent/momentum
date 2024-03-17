const calculator = require("./calculator");

console.log("Addition: ", calculator.sum(30, 15));
console.log("Subtraction: ", calculator.subtract(60, 15));
console.log("Multiplication: ", calculator.multiply(3, 15));
console.log("division: ", calculator.divide(90, 2));
console.log("division by zero: ", calculator.divide(45, 0));