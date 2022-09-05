import React, { useState } from "react";
import "../styles/RangeSlider.css";

const MIN = 0;
const MAX_VALUE = 10;
const STEP = 5;

const RangeSlider = () => {
  const [value, setValue] = useState(0);

  const getBackgroundSize = () => {
    return { backgroundSize: `${(value * 100) / MAX_VALUE}% 100%` };
  };
  return (
    <div className="rangeSlider">
      <input
        type="range"
        min={MIN}
        max={MAX_VALUE}
        step={STEP}
        onChange={(e) => setValue(e.target.value)}
        style={getBackgroundSize()}
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
