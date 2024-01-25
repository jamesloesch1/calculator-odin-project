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

const operate = function(numA, op, numB) {
    if (op === "+") {
        return add(numA, numB);
    } else if (op === "-") {
        return subtract(numA, numB);
    } else if (op === "X") {
        return multiply(numA, numB);
    } else if (op === "/") {
        return divide(numA, numB);
    } else {
        return "Not a supported operation";
    };
};

let firstNumber;
let secondNumber;
let operatorChoice;
let displayValue;

const output = document.querySelector('#output');

const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {
        operatorChoice = e.target.textContent;
        console.log(operatorChoice);
        output.textContent = '';
    }); 
});

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (operatorChoice === undefined) {
            displayValue = Number(output.textContent += e.target.textContent);
            firstNumber = displayValue;
            console.log(firstNumber);
        } else if (operatorChoice !== undefined) {
            displayValue = Number(output.textContent += e.target.textContent);
            secondNumber = displayValue;
            console.log(secondNumber);
        };
    }); 
});

const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');

clearButton.addEventListener('click', () => {
    firstNumber = '';
    secondNumber = ''
    operatorChoice = undefined;
    output.textContent = '';
});

equalsButton.addEventListener('click', () => {
    output.textContent = operate(firstNumber, operatorChoice, secondNumber);
});


