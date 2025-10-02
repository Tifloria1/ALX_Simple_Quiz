// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

// Helper: read inputs as numbers (default 0) and update result span
function calculateAndDisplay(operationFn) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operationFn(number1, number2);
    document.getElementById('calculation-result').textContent = result;
}

// Event listeners for each button
document.getElementById('add').addEventListener('click', function () {
    calculateAndDisplay(add);
});

document.getElementById('subtract').addEventListener('click', function () {
    calculateAndDisplay(subtract);
});

document.getElementById('multiply').addEventListener('click', function () {
    calculateAndDisplay(multiply);
});

document.getElementById('divide').addEventListener('click', function () {
    calculateAndDisplay(divide);
});
