let num1 = "";
let num2 = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let plus = false;
let minus = false;
let times = false;
let div = false;

let resetDisplay = false;
let clearDisplay = false;

const display = document.querySelector("#readout");
const memory = document.querySelector("#memory");

const addition = document.querySelector("#add");
function addTF() {
  plus = true;
  minus = false;
  times = false;
  div = false;
  num1 = display.textContent;
  memory.textContent = `${display.textContent} + `;
  resetDisplay = true;
}
addition.addEventListener("click", addTF);

const subtraction = document.querySelector("#subtract");
function subtractTF() {
  plus = false;
  minus = true;
  times = false;
  div = false;
  num1 = display.textContent;
  memory.textContent = `${display.textContent} - `;
  resetDisplay = true;
}
subtraction.addEventListener("click", subtractTF);

const multiplication = document.querySelector("#multiply");
function multiplyTF() {
  plus = false;
  minus = false;
  times = true;
  div = false;
  num1 = display.textContent;
  memory.textContent = `${display.textContent} x `;
  resetDisplay = true;
}
multiplication.addEventListener("click", multiplyTF);

const division = document.querySelector("#divide");
function divideTF() {
  plus = false;
  minus = false;
  times = false;
  div = true;
  num1 = display.textContent;
  memory.textContent = `${display.textContent} / `;
  resetDisplay = true;
}
division.addEventListener("click", divideTF);

const equality = document.querySelector("#equality");
function equals() {
  clearDisplay = true;
  let answer;
  num2 = display.textContent;
  memory.textContent += num2;
  switch (true) {
    case plus:
      answer = add(Number(num1), Number(num2));
      display.textContent = answer;
      memory.textContent += ` = ${answer}`;
      break;
    case minus:
      answer = subtract(Number(num1), Number(num2));
      display.textContent = answer;
      memory.textContent += ` = ${answer}`;
      break;
    case times:
      answer = multiply(Number(num1), Number(num2));
      display.textContent = answer;
      memory.textContent += ` = ${answer}`;
      break;
    case div:
      answer = divide(Number(num1), Number(num2));
      display.textContent = answer;
      memory.textContent += ` = ${answer}`;
      break;
    default:
      break;
  }
}
equality.addEventListener("click", equals);

const clear = document.querySelector("#c");
function runClear() {
  display.textContent = "0";
  memory.textContent = "";
  plus = false;
  minus = false;
  times = false;
  div = false;
  resetDisplay = false;
}
clear.addEventListener("click", runClear);

const zero = document.querySelector("#zero");
function runZero() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "0";
  } else {
    display.textContent += "0";
  }
}
zero.addEventListener("click", runZero);

const one = document.querySelector("#one");
function runOne() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "1";
  } else {
    display.textContent += "1";
  }
}
one.addEventListener("click", runOne);

const two = document.querySelector("#two");
function runTwo() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "2";
  } else {
    display.textContent += "2";
  }
}
two.addEventListener("click", runTwo);

const three = document.querySelector("#three");
function runThree() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "3";
  } else {
    display.textContent += "3";
  }
}
three.addEventListener("click", runThree);

const four = document.querySelector("#four");
function runFour() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "4";
  } else {
    display.textContent += "4";
  }
}
four.addEventListener("click", runFour);

const five = document.querySelector("#five");
function runFive() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "5";
  } else {
    display.textContent += "5";
  }
}
five.addEventListener("click", runFive);

const six = document.querySelector("#six");
function runSix() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "6";
  } else {
    display.textContent += "6";
  }
}
six.addEventListener("click", runSix);

const seven = document.querySelector("#seven");
function runSeven() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "7";
  } else {
    display.textContent += "7";
  }
}
seven.addEventListener("click", runSeven);

const eight = document.querySelector("#eight");
function runEight() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "8";
  } else {
    display.textContent += "8";
  }
}
eight.addEventListener("click", runEight);

const nine = document.querySelector("#nine");
function runNine() {
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
  if (display.textContent === "0") {
    display.textContent = "9";
  } else {
    display.textContent += "9";
  }
}
nine.addEventListener("click", runNine);

const period = document.querySelector("#decimal");
function runPeriod() {
  display.textContent += ".";
}
period.addEventListener("click", runPeriod);

const back = document.querySelector("#back");
function runBack() {
  if (display.textContent.length === 1) {
    display.textContent = "0";
  } else {
    let stringArray = display.textContent.split("");
    stringArray = stringArray.slice(0, stringArray.length - 1);
    stringArray = stringArray.join("");
    display.textContent = stringArray;
  }
}
back.addEventListener("click", runBack);

const plusMinus = document.querySelector("#plusMinus");
function posNeg() {
  let letterArray = display.textContent.split("");
  if (letterArray[0] === "-") {
    letterArray.shift();
  } else {
    letterArray.unshift("-");
  }
  letterArray = letterArray.join("");
  display.textContent = letterArray;
}
plusMinus.addEventListener("click", posNeg);
/*
function textButton(button) {
  const { id } = button;
  display.textContent + id;
}
*/
/*
How to get rid of redundancy of code for each number button:
operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

Set limit on number of characters in display - can this be done without it being an input field?
if (display.textContent.length === 12) {
    return?
    display.textContent = display.textContent?
}

Ability to type OR click on button in order to make display change

Reference step 6. in TOP instructions for the project from here on out
*/
