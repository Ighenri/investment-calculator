import React, { useState } from "react";

const initialUserInput = {
  currentSavings: 1000,
  "yearly-contribution": 10000,
  "expected-return": 7,
  duration: 10,
}; // This was separated to its own variable since the reset function is to use the value again and  ot just the state
// you can use camelCase or the string method for the variable name

export default function Form(props) {
  const [userInput, setUserInput] = useState(initialUserInput);

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const inputFormHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  // This function controls all form input.The input has a default value personally given but the value is gotten from the input a user enters

  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputFormHandler("current-savings", event.target.value)
            }
            type="number"
            value={userInput.currentSavings}
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputFormHandler("yearly-contribution", event.target.value)
            }
            type="number"
            value={userInput["yearly-contribution"]}
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputFormHandler("expected-return", event.target.value)
            }
            type="number"
            value={userInput["expected-return"]}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputFormHandler("duration", event.target.value)
            }
            type="number"
            value={userInput.duration}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
