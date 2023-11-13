let powered = false;

function power(){
    powered == false ? powered = true : powered = false;
}

function deleteLastCharacter(){

}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function sqrt() {
    var displayValue = eval(document.getElementById('display').value);
    var result = Math.sqrt(displayValue);

    document.getElementById('display').value = result;
}

function sin() {
    var displayValue = eval(document.getElementById('display').value);
    var result = Math.sin(displayValue);

    document.getElementById('display').value = result;
}

function cos() {
    var displayValue = eval(document.getElementById('display').value);
    var result = Math.cos(displayValue);

    document.getElementById('display').value = result;
}

function tan() {
    var displayValue = eval(document.getElementById('display').value);
    var result = Math.tan(displayValue);

    document.getElementById('display').value = result;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}