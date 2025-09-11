// Getting reference to the html elements that we are going to manipulate
const userInput = document.getElementById("userInput"); // getting the input field
const numberButtons = document.querySelectorAll(".number-btn"); // getting the number buttons by class name
const operatorButtons = document.querySelectorAll(".op-btn");
const equalsButton = document.querySelector(".equals-btn");
const clearButton = document.querySelector(".clear-btn");

// Handling number buttons so that when the button is clicked it's value is shown as the user input
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    userInput.value += button.textContent;
  });
});

// Handiling operator buttons
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "x") {
      userInput.value += "*";
    } else {
      userInput.value += button.textContent;
    }
  });
});

// Handling the clear button clicks
clearButton.addEventListener("click", () => {
  userInput.value = "";
});

// Handling the equals button
equalsButton.addEventListener("click", () => {
  try {
    const result = eval(userInput.value);
    userInput.value = result;
  } catch (error) {
    userInput.value = "Error";
  }
});
