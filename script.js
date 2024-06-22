let firstNumber = "";
let secondNumber = "";
let operator = "";


const display = document.querySelector("#display")
const buttons = document.querySelectorAll(".button")

function handleInput(value) {
    if (value >= '0' && value <= '9' || value === '.') {
        if (operator === '') {
            if (firstNumber.length <9 && !(firstNumber.includes('.') && value === '.')) {
                firstNumber += value;
                display.textContent = firstNumber;
            }
        } else {
            if (secondNumber.length <9 &&!(secondNumber.includes('.') && value === '.')) {
                secondNumber += value;
                display.textContent = secondNumber;
            }
        }
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (firstNumber !== '' && secondNumber !== '') {
            firstNumber = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber)).toString().slice(0, 9);
            secondNumber = '';
            display.textContent = firstNumber;
        }
        operator = value;
    } else if (value === '=') {
        if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
            const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            display.textContent = result;
            firstNumber = result.toString();
            secondNumber = '';
            operator = '';
        }
    } else if (value === 'AC') {
        firstNumber = '';
        secondNumber = '';
        operator = '';
        display.textContent = '0';
    } else if (value === 'Backspace') {
        if (operator === '') {
            firstNumber = firstNumber.slice(0, -1);
            display.textContent = firstNumber || '0';
        } else {
            secondNumber = secondNumber.slice(0, -1);
            display.textContent = secondNumber || '0';
        }
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        handleInput(button.textContent);
    });
});

window.addEventListener("keydown", (e) => {
    const key = e.key;
    if ((key >= '0' && key <= '9') || key === '.' || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter' || key === 'Escape' || key === 'Backspace') {
        handleInput(key === 'Enter' ? '=' : key === 'Escape' ? 'C' : key);
    }
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}
function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b)
        case "*":
            return multiply(a, b)
        case "/":
            return divide(a, b)
        default:
            return null
    }
}
