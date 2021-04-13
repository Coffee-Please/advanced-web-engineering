// Part 2 of Project Calculator


// Computations
// No precedence, operators perform equal math if another operator is pressed
function compute(display) {
  // Use switch for different operations
  switch (Calc.operator) {
    //Addition
    case "+":
      Calc.result = parseInt(Calc.num1) + parseInt(Calc.num2);
      break;

    //Subtraction
    case "−":
      Calc.result = parseInt(Calc.num1) - parseInt(Calc.num2);
      break;

    //Multiplication
    case "×":
      Calc.result = parseInt(Calc.num1) * parseInt(Calc.num2);
      break;

    //Division
    case "÷":
      Calc.result = parseInt(Calc.num1) / parseInt(Calc.num2);
      break;

    // if there is no operator, display the number entered
    default:
      Calc.result = parseInt(Calc.num1);
      return;
  } // end switch

  // display result and update num1
  display.innerText = Calc.num1 = Calc.result.toString();

  // clean up variables
  Calc.num2 = "0";
  Calc.operator = "";

} // end clear

// Clear
// Clears display and resets Calc values to initial state
function clear(display) {
  // reset values
  Calc.num1 = "0";
  Calc.num2 = "0";
  Calc.result = "0";
  Calc.operator = "";

  // reset display
  updateDisplay(display);
} // end clear



// Backspace
// Deletes last digit of display on click of [←] button
function backspace(display) {
  // update and clear variables as you backspace
  if (Calc.num2 != "0") {
    // slice off the last digit update num2
    Calc.num2 = Calc.num2.slice(0, -1);

    // if num 2 is empty, set it to 0
    if (Calc.num2.length == 0) {
      Calc.num2 = "0";
    } // end if
  } else if (Calc.operator != "" && Calc.num2 == "0") {
    // delete the operator
    Calc.operator = "";
  } else {
    // slice off the last digit update num1
    Calc.num1 = Calc.num1.slice(0, -1);

    // if num 1 is empty, set it to 0
    if (Calc.num1.length == 0) {
      Calc.num1 = "0";
    } //end if
  } // end else

  // display to screen
  updateDisplay(display);
} // end backspace



// get and process user input
function getInput(buttonValue, display) {
  // display input for retrieval
  display.innerText = display.innerText + buttonValue;

  // if input is a number
  if (!isNaN(buttonValue)) {
    // If the operator has not been chosen
    if (Calc.operator == "") {
      // If starting first calculation, replace the 0
      if (Calc.num1 == "0") {
        Calc.num1 = "";
      } // end if

      // get the first number and display
      Calc.num1 = Calc.num1 + buttonValue;
    } // end if
    else {
      // If starting second number, replace the 0
      if (Calc.num2 == "0") {
        Calc.num2 = "";
      } // end if

      // And get the second number and display
      Calc.num2 = Calc.num2 + buttonValue;
    } // end else
  } // end if
  else {
    // otherwise get the operator
    Calc.operator = buttonValue;
  } // end else

  // update display
  updateDisplay(display);
} // end getInput



// get operator
function getOperator(buttonValue, display) {
  // Do not allow user to start with operators
  if (Calc.num1 == "0") {
    return;
  } // end if

  // Case: If there is an operator, and a number is pressed, perform math and add
  // to display Ex.(123 + 123) if operator pressed, compute then make new input num2 (Ex. 246)
  if (Calc.operator != "" && Calc.num2 != "0") {
    // make the computation
    compute(display);

    // get the input
    getInput(buttonValue, display);

    // clear values
    Calc.num2 = "0";

    // update current operator
    Calc.operator = buttonValue;

    // update the display
    updateDisplay(display);
    return;
  } // end if

  // Case: If there is an operator and an operator is pressed, replace the operator
  if (Calc.operator != "" && Calc.num2 == "0") {
    // delete the last symbol
    backspace(display);
  } // end if

  // get operator input and display
  getInput(buttonValue, display);

  // get new operator
  Calc.operator = buttonValue;

  // format the display
  updateDisplay(display);
} // end getOperator



// update display
// Updates the calculator screen based on three cases
function updateDisplay(display) {
  // if there is no operator or if the display is empty
  if (Calc.operator == "" || display.innerText == "") {
    display.innerText = Calc.num1;
  } // end if

  // if there is and operator but no second number
  else if (Calc.num2 == "0") {
    display.innerText = Calc.num1 + " " + Calc.operator;
  } // end else if

  // otherwise format all three
  else {
    display.innerText = Calc.num1 + " " + Calc.operator + " " + Calc.num2;
  } // end else
} // end updateDisplay



// calculator object
const Calc = {
  num1: "0",
  num2: "0",
  result: "0",
  operator: ""
};



// Operations
function calculator() {
  "use strict";

  // Variables
  const display = document.querySelector(".display");
  const input = document.querySelector(".calculator-buttons");

  // listen for calculator button clicks
  input.addEventListener("click", function(event) {
    // use num1 until operator is selected
    // innertext[0] prevents multiple values from being selected, defaulting to [C] clear
    const buttonValue = event.target.innerText[0];

    switch (buttonValue) {
      // backspace
      case "←":
        backspace(display);
        break;

      // clear
      case "C":
        clear(display);
        break;

      // equals
      case "=":
        // make the computation
        // Note: if an operator is selected but there is no num2, num2 = 0
        compute(display);
        break;

      //operator input
      // (||) OR operator is invalid in switch src: https://stackoverflow.com/questions/18412936/or-operator-in-switch-case
      case "+":
      case "−":
      case "÷":
      case "×":
        getOperator(buttonValue, display);
        break;

      // number input
      default:
        // get number input and display
        getInput(buttonValue, display);
        break;
    } // end switch
  }); // end input.addEventListener
} // end calculator



// (window.onload) src: Any javascript assignment of mine from COMP 484 Fall 2020
// call the calculator() on window load
window.onload = calculator;
