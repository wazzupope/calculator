function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let plus = false;
let minus = false;
let times = false;
let div = false;

function equals(num1, num2) {
    switch (true) {
        case plus:
            return add(num1, num2);
            break;
        case minus:
            return subtract(num1, num2);
            break;
        case times:
            return multiply(num1, num2);
            break;
        case divide:
            return divide(num1, num2);
            break;
        default:
            break;
    };
};

const display = document.querySelector("#readout");

function clear() {
    display.textContent = "";
};

function zero() {
    display.textContent + "0";
};

function one() {
    display.textContent + "1";
};

function two() {
    display.textContent + "2";
};

function three() {
    display.textContent + "3";
};

function four() {
    display.textContent + "4";
};

function five() {
    display.textContent + "5";
};

function six() {
    display.textContent + "6";
};

function seven() {
    display.textContent + "7";
};

function eight() {
    display.textContent + "8";
};

function nine() {
    display.textContent + "9";
};

function period() {
    display.textContent + ".";
};

function back() {
    let stringArray = display.textContent.split("");
    stringArray = stringArray.slice(stringArray.length - 1);
    stringArray = stringArray.join("");
    return stringArray;
};

function posNeg() {
    let letterArray = display.textContent.split("");
    if (letterArray[0] = "-") {
        letterArray.shift();
    }
    else {
        letterArray.unshift("-");
    };
    letterArray = letterArray.join("");
    return letterArray;
};

function textButton (button) {
    let id = button.id;
    display.textContent + id;
};

/*
change all the functions for each button to event listeners instead,
and make the function that runs point to the textButton function or the corresponding operator function

Set limit on number of characters in display
Only allow one decimal in display

"numbers with or without decimals":
[-+]?[0-9]*[.,]?[0-9]+

<input type="text" class="decimal" value="" />

$('.decimal').keyup(function(){
    var val = $(this).val();
    if(isNaN(val)){
         val = val.replace(/[^0-9\.]/g,'');
         if(val.split('.').length>2) 
             val =val.replace(/\.+$/,"");
    }
    $(this).val(val); 
});

add event listeners - onclick make that var = true
Ability to type OR click on button in order to make display change
Create functions that update the display when you click on a button (you should be storing the "display value" in a variable somewhere for use in the next steps)
Function "operate" to execute what is on the display when you click enter (takes 2 numbers and then calls one of the above functions on the numbers)
Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator,
 and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them.
 Don’t feel bad if it takes you a while to figure out the logic.
Reference step 6. in TOP instructions for the project from here on out
*/