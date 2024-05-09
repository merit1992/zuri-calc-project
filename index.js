const inputValue = document.getElementById('show-result')
const resultDisplayView = document.getElementById('result')

inputValue.addEventListener('click',  () => calculateResult())

let currentDisplay = "0"
let resultDisplay = false

function appendToDisplay(value) {
    if (currentDisplay === "0" || resultDisplay) {
      currentDisplay = value;
    } else {
      currentDisplay += value;
    }
  
    resultDisplay = false;

    updateDisplay();
  }
//  function to display our numbers
const updateDisplay = () =>  resultDisplayView.textContent = currentDisplay

const calculateResult = () => {
    try {
    
      const result = eval(currentDisplay);
      currentDisplay += "\n=" + result.toString();
  
      updateDisplay();
    } catch (error) {
      // Display an error message
      currentDisplay += "\nError";
  
      // Show the error
      updateDisplay();
    }
    resultDisplay = true;
  }
 
  const clearLastElement = () => {
    currentDisplay = currentDisplay.slice(0, -1);
  
    if (currentDisplay === "") {
      currentDisplay = "0";
    }
    updateDisplay();
  }

  //Function to clear the entire display
const clearDisplay = () => {
    currentDisplay = "0";
    resultDisplay = false;
  
    updateDisplay();
  }