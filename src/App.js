import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpace(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVoiletRed");
  const [disabled, setDisabled] = useState(false);
  const newButtonColor =
    buttonColor === "MediumVoiletRed" ? "MidnightBlue" : "MediumVoiletRed";
  return (
    <div>
      <button
        disabled={disabled}
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: disabled ? "grey" : buttonColor }}
      >
        Change to {replaceCamelWithSpace(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
