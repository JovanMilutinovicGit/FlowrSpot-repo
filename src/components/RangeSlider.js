import React, { useState } from "react";
import "../styles/RangeSlider.css";

const MAX = 10;
const PERCENTAGE = 100;

const RangeSlider = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="rangeSlider">
      <input
        type="range"
        min="0"
        max={MAX}
        step="5"
        onChange={(e) => setValue(e.target.value)}
        style={{ backgroundSize: `${(value * PERCENTAGE) / MAX}% 100%` }}
        value={value}
      />
      <div className="valueOfSlider">
        <span id="one">1 km</span>
        <span id="five">5 km</span>
        <span id="ten">10 km</span>
      </div>
    </div>
  );
};

export default RangeSlider;
