const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error."
        setTimeout(clearDisplay, 1000);
    }
}

function backspace(){
    display.value = display.value.substring(0, display.value.length - 1);
}