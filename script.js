const display = document.getElementById("display");
let first = null;
let operator = null;
let justCalculated = false;
let justUpdated = false;

function appendToDisplay(input){
    if(input >= '0' && input <= '9' || input === '.'){
        if(justCalculated){
            first = null;
            console.log("Set first to null");
            display.value = '';
            justCalculated = false;
        }
        else if(operator != null){
            display.value = '';
        }
        display.value += input;
    }
    else{
        if(first == null || justUpdated){
            first = parseFloat(display.value);
            justUpdated = false;
        }
        if(justCalculated){
            justCalculated = false;
        }
        operator = input;
    }
}

function clearDisplay(){
    display.value = ''; 

    // reset vars
    first = null;
    operator = null;
    justCalculated = false;
    justUpdated = false;
}

function calculate(){
    let second = parseFloat(display.value);

    switch(operator){
        case '+': first = first + second; break;
        case '-': first = first - second; break;
        case '*': first = first * second; break;
        case '/': first = first / second; break;
        default: return;
    }

    justCalculated = true;
    operator = null;
    display.value = first;
}

function backspace(){
    if(display.value.length > 0){
        display.value = display.value.substring(0, display.value.length - 1);
        justUpdated = true;
    }
}

function negSign(){
    if(display.value.length > 0){
        justUpdated = true;
        if(parseFloat(display.value) > 0){
            display.value = "-" + display.value;
        }
        else{
            display.value = display.value.substring(1, display.value.length);
        }
    }
}
