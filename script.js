// Calculator project 

// Basic requirements 
// 1. Be able to handle add, subtract, multiply, and divide 
// 2. Be able to handle a standard operation, which will consist of a number, operator, and another number (i.e., 4 + 6)
// 3. Output the result of a standard operation 

const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const output = document.querySelector('#output');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
let currentState = '';
let previousState = '';
let operationState = '';
let result;

const calculate = function() {
    let previous = Number(previousState); // 0
    let current = Number(currentState); // 0

    if (operationState === '+') {
        result = current + previous;
        currentState = result;
        previousState = '';
        operationState = '';
        return result;
    } else if (operationState === '-') {
        result = current - previous;
        currentState = result;
        previousState = '';
        operationState = '';
        return result;
    } else if (operationState === 'X') {
        result = current * previous;
        currentState = result;
        previousState = '';
        operationState = '';
        return result;
    } else if (operationState === '/') {
        result = current / previous;
        currentState = result;
        previousState = '';
        operationState = '';
        return result;
    }

}; 

const updateDisplay = function() {

    operators.forEach(operator => {
        operator.addEventListener('click', (e) => {
            if (previousState !== '' && currentState !== '') {
                output.textContent = '';
                output.textContent = calculate();
            } else if (previousState !== '' && currentState === '') {
                output.textContent = '';
                operationState = e.target.textContent;
            } else if (previousState === '' && currentState !== '') {
                output.textContent = '';
                operationState = e.target.textContent;
            }
        }); 
    });

    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            if (operationState === '') {
                output.textContent += e.target.textContent;
                previousState = Number(output.textContent);
            } else if (previousState !== '' && operationState !== '') {
                output.textContent += e.target.textContent;
                currentState = Number(output.textContent); 
            } else if (currentState !== '' && operationState !== '') {
                output.textContent += e.target.textContent;
                previousState = Number(output.textContent); 
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        output.textContent = calculate();
    });

    clearButton.addEventListener('click', () => {
        output.textContent = '';
        currentState = '';
        previousState = '';
        operationState = '';
    });

};

updateDisplay();