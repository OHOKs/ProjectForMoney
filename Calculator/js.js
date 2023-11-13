let powered = false;

function power(){
    powered == false ? powered = true : powered = false;
    
    console.log(powered)
}

function deleteLastCharacter(){
    var displayValue = document.getElementById('display').value;
    
    document.getElementById('display').value = displayValue.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function sqrt() {
    var displayCalculatedValue = eval(document.getElementById('display').value);
    var result = Math.sqrt(displayCalculatedValue);

    document.getElementById('display').value = result;
}

function sin() {
    var displayCalculatedValue = eval(document.getElementById('display').value);
    var result = Math.sin(displayCalculatedValue);

    document.getElementById('display').value = result;
}

function cos() {
    var displayCalculatedValue = eval(document.getElementById('display').value);
    var result = Math.cos(displayCalculatedValue);

    document.getElementById('display').value = result;
}

function tan() {
    var displayCalculatedValue = eval(document.getElementById('display').value);
    var result = Math.tan(displayCalculatedValue);

    document.getElementById('display').value = result;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}
