A basic calculator application to demonstrate all abilities learned in Foundations course of The Odin Project.

Use of HTML, CSS, and JavaScript to create a functioning calculator interface.


Javascript code currently incomplete, issues/bugs remaining to resolve:

How to get rid of redundancy of code for each number button. An example in the right direction might be (taken from: https://github.com/michalosman/calculator/blob/master/script.js):
operatorButtons.forEach((button) =>
  button.addEventListener('click', () => setOperation(button.textContent))
)

need to edit equals function to not make an error when equals is pressed repeatedly

figure out how to limit number of characterss in display when answer is given

Ability to type OR click on button in order to make display change

Reference step 6. in TOP instructions for calculator project for any other remaining to-dos