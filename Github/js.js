//Basic Variables
let powered = false;
let history = [];

//Power
function power() {
    var powerElement = document.getElementById('power');

    powered == false ? powered = true : powered = false;
    powered == false ? $(':button').prop('disabled', true) : $(':button').prop('disabled', false);

    powered == false ? $(':button').removeClass("normalButtonsHover") : $(':button').addClass("normalButtonsHover");

    $('#calculate').removeClass("normalButtonsHover");
    powered == false ? $('#calculate').removeClass("calculateHover") : $('#calculate').addClass("calculateHover");

    $('#sin').removeClass("normalButtonsHover");
    powered == false ? $('#sin').removeClass("specialButtonsHover") : $('#sin').addClass("specialButtonsHover");

    $('#cos').removeClass("normalButtonsHover");
    powered == false ? $('#cos').removeClass("specialButtonsHover") : $('#cos').addClass("specialButtonsHover");

    $('#tan').removeClass("normalButtonsHover");
    powered == false ? $('#tan').removeClass("specialButtonsHover") : $('#tan').addClass("specialButtonsHover");

    $('#afa').removeClass("normalButtonsHover");
    powered == false ? $('#afa').removeClass("specialButtonsHover") : $('#afa').addClass("specialButtonsHover");

    $('#sqrt').removeClass("normalButtonsHover");
    powered == false ? $('#sqrt').removeClass("specialButtonsHover") : $('#sqrt').addClass("specialButtonsHover");

    $('#exponentiation').removeClass("normalButtonsHover");
    powered == false ? $('#exponentiation').removeClass("specialButtonsHover") : $('#exponentiation').addClass("specialButtonsHover");

    $('#delete').removeClass("normalButtonsHover");
    powered == false ? $('#delete').removeClass("deleteHover") : $('#delete').addClass("deleteHover");

    $('#clear').removeClass("normalButtonsHover");
    powered == false ? $('#clear').removeClass("clearButtonHover") : $('#clear').addClass("clearButtonHover");

    powered == false ? powerElement.innerText = "ON" : powerElement.innerText = "OFF";
    powered == false ? powerElement.style.backgroundColor = "green" : powerElement.style.backgroundColor = "red";

    powerElement.disabled = false;
    history = [];
}

//Display Functions
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function deleteLastCharacter() {
    var displayValue = document.getElementById('display').value;

    document.getElementById('display').value = displayValue.slice(0, -1);
}

function clearDisplay() {
    document.getElementById('display').value = '';   
}

//Operations
function sqrt() {
    var calculatedDisplayValue = eval(document.getElementById('display').value);
    var result = Math.sqrt(calculatedDisplayValue);

    document.getElementById('display').value = result;   
    history[history.length] = result;
}

function sin() {
    var calculatedDisplayValue = eval(document.getElementById('display').value);
    var result = Math.sin(calculatedDisplayValue);

    document.getElementById('display').value = result;   
    history[history.length] = result;

}

function cos() {
    var calculatedDisplayValue = eval(document.getElementById('display').value);
    var result = Math.cos(calculatedDisplayValue);

    document.getElementById('display').value = result;
    history[history.length] = result;
}

function tan() {
    var calculatedDisplayValue = eval(document.getElementById('display').value);
    var result = Math.tan(calculatedDisplayValue);

    document.getElementById('display').value = result;  
    history[history.length] = result;
}

function afa() {
    var displayValue = document.getElementById('display').value;
    var result = parseInt(displayValue) / 27;

    document.getElementById('display').value = result;  
    history[history.length] = result;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value.replace("^", '**'));

        history[history.length] = eval(document.getElementById('display').value);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

//Stored History
function historyPopup() {
    var historyElement = document.getElementById('history-content');
    historyElement.innerHTML = '';

    for(let i = 0; i < history.length; i++){
        var newParagraph = document.createElement("p");
        newParagraph.textContent = history[i];
        historyElement.appendChild(newParagraph);
    }
}