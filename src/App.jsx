import { useState } from "react";
import "./App.css";
import Screen from "./Screen";
import Buttons from "./Buttons";

function App() {
  const [screenOutput, setScreenOutput] = useState(0);
  const [buttonInput, setButtonInput] = useState("");
  const [cursorPosition, setCursorPosition] = useState(-1);
  const [errorState, setErrorState] = useState(false);

  const resetter = async () => {
    await setErrorState(false);
    await setButtonInput("");
    await setScreenOutput(0);
    await setCursorPosition(-1);
  };

  const backspacer = () => {
    if (cursorPosition === -1) {
      setButtonInput((prevInput) => prevInput.slice(0, -1));
    } else {
      const updatedInput =
        buttonInput.slice(0, cursorPosition) +
        buttonInput.slice(cursorPosition + 1);
      setButtonInput(updatedInput);
      setCursorPosition(cursorPosition - 1);
    }
  };

  const buttonInputHandler = (input) => {
    if (cursorPosition === -1) {
      setButtonInput((prevInput) => prevInput + input);
    } else {
      const updatedInput =
        buttonInput.slice(0, cursorPosition + 1) +
        input +
        buttonInput.slice(cursorPosition + 1);
      setButtonInput(updatedInput);
      setCursorPosition(cursorPosition + 1);
    }
  };

  const evalExpression = (expression) => {
    // Remove leading zeros
    expression = expression.replace(/^0+/, "");

    // Replace multiplication symbol with asterisk (*)
    expression = expression.replace(/×/g, "*");

    // Replace division symbol with forward slash (/)
    expression = expression.replace(/÷/g, "/");

    // Calculate the result using JavaScript's built-in Function constructor
    const calculate = new Function(`return ${expression};`);
    return calculate();
  };

  const calculateResult = () => {
    try {
      setErrorState(false);
      const result = evalExpression(buttonInput); // Evaluate the input expression using custom logic

      setScreenOutput(result); // Update the screen output with the result
    } catch (error) {
      console.log(error);
      setErrorState(true);
      setScreenOutput("Invalid Input");
    }
  };

  return (
    <div className="app">
      <h1 className="header text-white">Phoenix Calc</h1>
      <Screen
        errorState={errorState}
        output={screenOutput}
        receivedInput={buttonInput}
        cursorPosition={cursorPosition}
      />
      <Buttons
        backspace={backspacer}
        reset={resetter}
        button={buttonInputHandler}
        calculate={calculateResult}
      />
    </div>
  );
}

export default App;
