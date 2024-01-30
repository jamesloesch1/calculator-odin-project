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
let firstNumber = '';
let secondNumber = ''; 
let operatorChoice = '';
let result;

const calculate = function() {
    let first = Number(firstNumber); // 0
    let second = Number(secondNumber); // 0

    if (operatorChoice === '+') {
        result = first + second;
        firstNumber = result;
        secondNumber = '';
        operatorChoice = '';
        return result;
    } else if (operatorChoice === '-') {
        result = first - second;
        firstNumber = result;
        secondNumber = '';
        operatorChoice = '';
        return result;
    } else if (operatorChoice === 'X') {
        result = first * second;
        firstNumber = result;
        secondNumber = '';
        operatorChoice = '';
        return result;
    } else if (operatorChoice === '/') {
        result = first / second;
        firstNumber = result;
        secondNumber = '';
        operatorChoice = '';
        return result;
    }

}; 

const updateDisplay = function() {

    operators.forEach(operator => {
        operator.addEventListener('click', (e) => {
            if (firstNumber !== '' && secondNumber === '') {
                operatorChoice = e.target.textContent; 
            } else if (firstNumber !== '' && secondNumber !== '') {
                output.textContent = calculate();
                operatorChoice = e.target.textContent; 
            }
            output.textContent = '';
        }); 
    });

    numbers.forEach(number => {
        number.addEventListener('click', (e) => {
            if (operatorChoice === '') {
                output.textContent += Number(e.target.textContent);
                firstNumber = output.textContent; 
            } else if (operatorChoice !== '' && firstNumber !== '') {
                output.textContent += Number(e.target.textContent);
                secondNumber = output.textContent; 
            }
        });
    });

    equalsButton.addEventListener('click', () => {
        output.textContent = calculate();
    });

    clearButton.addEventListener('click', () => {
        output.textContent = '';
        firstNumber = '';
        secondNumber = '';
        operatorChoice = '';
    });

};

updateDisplay();

