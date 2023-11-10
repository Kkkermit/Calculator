function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const expression = document.getElementById('display').value;
    
    const result = calculateOnServer(expression);

    // Display the result
    document.getElementById('display').value = result;
}

function calculateOnServer(expression) {
    try {
        return eval(expression);
    } catch (error) {
        return 'Error';
    }
}
