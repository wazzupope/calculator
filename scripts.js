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

var plus = false;
var minus = false;
var times = false;
var div = false;

function equals() {

}

/*
Functions for operators (add, subtract, multiply, divide)
Function to put answer on display
Function to clear display
add event listeners - onclick make that var = true
Function to "delete" or backspace within display
Ability to type or click on button in order to make display change
Create functions that update the display when you click on a button (you should be storing the "display value" in a variable somewhere for use in the next steps)
Function "operate" to execute what is on the display when you click enter (takes 2 numbers and then calls one of the above functions on the numbers)
Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator,
 and also save which operation has been chosen and then operate() on them when the user presses the “=” key.
You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them.
 Don’t feel bad if it takes you a while to figure out the logic.
Reference step 6. in TOP instructions for the project from here on out
*/