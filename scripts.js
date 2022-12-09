let num1 = "";
let num2 = "";

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

const addition = document.querySelector("#add");
function addTF() {
    plus = true;
    minus = false;
    times = false;
    div = false;
    num1 = display.textContent;
    memory.textContent = display.textContent + " + ";
};
addition.addEventListener("click", addTF);

const subtraction = document.querySelector("#subtract");
function subtractTF() {
    plus = false;
    minus = true;
    times = false;
    div = false;
    num1 = display.textContent;
    memory.textContent = display.textContent + " - ";
};
subtraction.addEventListener("click", subtractTF);

const multiplication = document.querySelector("#multiply");
function multiplyTF() {
    plus = false;
    minus = true;
    times = true;
    div = false;
    num1 = display.textContent;
    memory.textContent = display.textContent + " x ";
};
multiplication.addEventListener("click", multiplyTF);

const division = document.querySelector("#divide");
function divideTF() {
    plus = false;
    minus = true;
    times = false;
    div = true;
    num1 = display.textContent;
    memory.textContent = display.textContent + " / ";
};
division.addEventListener("click", divideTF);

const equality = document.querySelector("#equality");
function equals() {
    num2 = display.textContent;
    memory.textContent += num2;
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
        case div:
            return divide(num1, num2);
            break;
        default:
            break;
    };
};
equality.addEventListener("click", equals);

const display = document.querySelector("#readout");
const memory = document.querySelector("#memory");

const clear = document.querySelector("#c");
function runClear() {
    display.textContent = "0";
    memory.textContent = "";
};
clear.addEventListener("click", runClear);

const zero = document.querySelector("#zero");
function runZero() {
    if (display.textContent === "0") {
        display.textContent = "0";
    }
    else {
        display.textContent += "0";
    };
};
zero.addEventListener("click", runZero);

const one = document.querySelector("#one");
function runOne() {
    if (display.textContent === "0") {
        display.textContent = "1";
    }
    else {
        display.textContent += "1";
    };
};
one.addEventListener("click", runOne);

const two = document.querySelector("#two");
function runTwo() {
    if (display.textContent === "0") {
        display.textContent = "2";
    }
    else {
        display.textContent += "2";
    };
};
two.addEventListener("click", runTwo);

const three = document.querySelector("#three");
function runThree() {
    if (display.textContent === "0") {
        display.textContent = "3";
    }
    else {
        display.textContent += "3";
    };
};
three.addEventListener("click", runThree);

const four = document.querySelector("#four");
function runFour() {
    if (display.textContent === "0") {
        display.textContent = "4";
    }
    else {
        display.textContent += "4";
    };
};
four.addEventListener("click", runFour);

const five = document.querySelector("#five");
function runFive() {
    if (display.textContent === "0") {
        display.textContent = "5";
    }
    else {
        display.textContent += "5";
    };
};
five.addEventListener("click", runFive);

const six = document.querySelector("#six");
function runSix() {
    if (display.textContent === "0") {
        display.textContent = "6";
    }
    else {
        display.textContent += "6";
    };
};
six.addEventListener("click", runSix);

const seven = document.querySelector("#seven");
function runSeven() {
    if (display.textContent === "0") {
        display.textContent = "7";
    }
    else {
        display.textContent += "7";
    };
};
seven.addEventListener("click", runSeven);

const eight = document.querySelector("#eight");
function runEight() {
    if (display.textContent === "0") {
        display.textContent = "8";
    }
    else {
        display.textContent += "8";
    };
};
eight.addEventListener("click", runEight);

const nine = document.querySelector("#nine");
function runNine() {
    if (display.textContent === "0") {
        display.textContent = "9";
    }
    else {
        display.textContent += "9";
    };
};
nine.addEventListener("click", runNine);

const period = document.querySelector("#decimal");
function runPeriod() {
    display.textContent += ".";
};
period.addEventListener("click", runPeriod);

const back = document.querySelector("#back");
function runBack() {
    if (display.textContent.length === 1) {
        display.textContent = "0";
    }
    else {
        let stringArray = display.textContent.split("");
        stringArray = stringArray.slice(0, (stringArray.length - 1));
        stringArray = stringArray.join("");
        display.textContent = stringArray;
    };
};
back.addEventListener("click", runBack);

const plusMinus = document.querySelector("#plusMinus");
function posNeg() {
    let letterArray = display.textContent.split("");
    if (letterArray[0] === "-") {
        letterArray.shift();
    }
    else {
        letterArray.unshift("-");
    };
    letterArray = letterArray.join("");
    display.textContent = letterArray;
};
plusMinus.addEventListener("click", posNeg);

function textButton(button) {
    let id = button.id;
    display.textContent + id;
};

/*
in the "TF" functions when an operator is clicked: need to update the variable for first number to equal display.textContent
then also make sure that the number doesn't go away, but ensure that it is replaced by the new variable when more numbers are entered
when equals is clicked, likely need that function to make the second number variable equal to the current display.textContent

also need to change strings to numbers somewhere

is there a way to have a single function to update the display rather than each button having its own?

Set limit on number of characters in display - can this be done without it being an input field?
if (display.textContent.length === 12) {
    return?
    display.textContent = display.textContent?
}

Only allow one decimal in display

use textContent.includes(".") to determine if there is a decimal, then create action off of that

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