function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSqrt() {
    var displayValue = eval(document.getElementById('display').value)
    var result = Math.sqrt(displayValue);

    document.getElementById('display').value = result;
}

function calculateSin() {
    var result = Math.sin(eval(document.getElementById('display').value));
    document.getElementById('display').value = result;
}

function calculateCos() {
    var result = Math.cos(eval(document.getElementById('display').value));
    document.getElementById('display').value = result;
}

function calculateTan() {
    var result = Math.tan(eval(document.getElementById('display').value));
    document.getElementById('display').value = result;
}
