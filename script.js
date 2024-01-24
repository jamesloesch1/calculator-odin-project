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

const operate = function(op, numA, numB) {
    if (op === "add") {
        return add(numA, numB);
    } else if (op === "subtract") {
        return subtract(numA, numB);
    } else if (op === "multiply") {
        return multiply(numA, numB);
    } else if (op === "divide") {
        return divide(numA, numB);
    } else {
        return "Not a supported operation";
    };
};

let firstNumber;
let secondNumber;
let operator; 
let displayValue;

const output = document.querySelector('#output');

const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (operator === '') {
            displayValue = Number(output.textContent += e.target.textContent);
            firstNumber = displayValue;
            console.log(firstNumber);
        } else {
            displayValue = Number(output.textContent += e.target.textContent);
            secondNumber = displayValue;
            console.log(secondNumber);
        };
    }); 
})

const addButton = document.querySelector('.operator.add');
const subtractButton = document.querySelector('.operator.subtract');
const multiplyButton = document.querySelector('.operator.multiply');
const divideButton = document.querySelector('.operator.divide');
const equalsButton = document.querySelector('.operator.equals');
const clearButton = document.querySelector('.operator.clear');


clearButton.addEventListener('click', () => {
    output.textContent = '';
});

addButton.addEventListener('click', () => {
    operator = "add";
    Number(output.textContent = '');
});

subtractButton.addEventListener('click', () => {
    operator = "subtract";
    Number(output.textContent = '');
});

multiplyButton.addEventListener('click', () => {
    operator = "multiply";
    Number(output.textContent = '');
});

divideButton.addEventListener('click', () => {
    operator = "divide";
    Number(output.textContent = '');
});

equalsButton.addEventListener('click', () => {
    operate(operator, firstNumber, secondNumber);
    console.log(operate);
});


