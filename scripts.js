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
  if (clearDisplay) clearDisplay = false;
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
  if (clearDisplay) clearDisplay = false;
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
  if (clearDisplay) clearDisplay = false;
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
  if (clearDisplay) clearDisplay = false;
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
  if ((plus === false) && (minus === false) && (times === false) && (div === false)) return;
  clearDisplay = true;
  let answer;
  num2 = display.textContent;
  memory.textContent += num2;
  switch (true) {
    case plus:
      answer = add(Number(num1), Number(num2));
      display.textContent = answer;
      num1 = num2;
      num2 = "";
      break;
    case minus:
      answer = subtract(Number(num1), Number(num2));
      display.textContent = answer;
      num1 = num2;
      num2 = "";
      break;
    case times:
      answer = multiply(Number(num1), Number(num2));
      display.textContent = answer;
      num1 = num2;
      num2 = "";
      break;
    case div:
      answer = divide(Number(num1), Number(num2));
      display.textContent = answer;
      num1 = num2;
      num2 = "";
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
  const zeroDisplayLimiter = display.textContent.split('');
  if (zeroDisplayLimiter.length === 11) return;
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
  const oneDisplayLimiter = display.textContent.split('');
  if (oneDisplayLimiter.length === 11) return;
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
  const twoDisplayLimiter = display.textContent.split('');
  if (twoDisplayLimiter.length === 11) return;
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
  const threeDisplayLimiter = display.textContent.split('');
  if (threeDisplayLimiter.length === 11) return;
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
  const fourDisplayLimiter = display.textContent.split('');
  if (fourDisplayLimiter.length === 11) return;
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
  const fiveDisplayLimiter = display.textContent.split('');
  if (fiveDisplayLimiter.length === 11) return;
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
  const sixDisplayLimiter = display.textContent.split('');
  if (sixDisplayLimiter.length === 11) return;
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
  const sevenDisplayLimiter = display.textContent.split('');
  if (sevenDisplayLimiter.length === 11) return;
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
  const eightDisplayLimiter = display.textContent.split('');
  if (eightDisplayLimiter.length === 11) return;
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
  const nineDisplayLimiter = display.textContent.split('');
  if (nineDisplayLimiter.length === 11) return;
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
  if (display.textContent.includes('.')) return;
  const periodDisplayLimiter = display.textContent.split('');
  if (periodDisplayLimiter.length === 11) return;
  if (clearDisplay) {
    display.textContent = "0";
    memory.textContent = "";
    clearDisplay = false;
  } else if (resetDisplay) {
    display.textContent = "0";
    resetDisplay = false;
  }
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
need to edit equals function to not make an error when equals is pressed repeatedly

figure out how to limit number of chars in display when answer is given

Ability to type OR click on button in order to make display change

Reference step 6. in TOP instructions for the project from here on out
*/
