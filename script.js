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
let operationState;

const calculate = function() {
    let previous = Number(previousState); // 0
    let current = Number(currentState); // 0
    let result; 

    if (operationState === '+') {
        return result = previous + current;
    } else if (operationState === '-') {
        return result = previous - current;
    } else if (operationState === 'X') {
        return result = previous * current;
    } else if (operationState === '/') {
       return result = previous / current;
    }

    currentState = result;
    previousState = '';
    operationState = '';
}; 

const updateDisplay = function() {

    operators.forEach(operator => {
        operator.addEventListener('click', (e) => {
            if (previousState !== '' && currentState !== '') {
                output.textContent = '';
                operationState = e.target.textContent;
                output.textContent = calculate();
            } else {
                output.textContent = '';
                operationState = e.target.textContent;
            }
        }); 
    });

    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            if (operationState === undefined) {
                output.textContent += e.target.textContent;
                previousState = Number(output.textContent);
                console.log(previousState);
            } else if (operationState !== undefined && currentState === '') {
                output.textContent += e.target.textContent;
                currentState = Number(output.textContent);
                console.log(currentState);
            } else if (operationState !== undefined && currentState !== '') {
                output.textContent += e.target.textContent;
                previousState = Number(output.textContent);
                console.log(previousState);
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        output.textContent = calculate();
        console.log(calculate());
        console.log(currentState + ' current');
    });

    clearButton.addEventListener('click', () => {
        output.textContent = '';
        currentState = '';
    })

}

updateDisplay();