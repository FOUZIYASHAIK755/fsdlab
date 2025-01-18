// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}

// Function to perform the calculation based on the operation
function calculate(num1, num2, operation) {
    switch (operation) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            return "Error: Invalid operation";
    }
}

// Example usage
const num1 = 10; // First operand
const num2 = 5;  // Second operand
const operation = 'add'; // Operation to perform

const result = calculate(num1, num2, operation);
console.log(`Result of ${operation}ing ${num1} and ${num2}:`, result);
