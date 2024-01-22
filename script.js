// Calculator project 

// Basic requirements 
// 1. Be able to handle add, subtract, multiply, and divide 
// 2. Be able to handle a standard operation, which will consist of a number, operator, and another number (i.e., 4 + 6)
// 3. Output the result of a standard operation 

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
}; 

let firstNumber;
let secondNumber;
let operator; 

const operate = function(op, numA, numB) {
    if (op === add) {
        return add(numA, numB);
    } else if (op === subtract) {
        return subtract(numA, numB);
    } else if (op === multiply) {
        return multiply(numA, numB);
    } else if (op === divide) {
        return divide(numA, numB);
    } else {
        return "Not a supported operation";
    };
};

console.log(operate(add, 3, 5));



