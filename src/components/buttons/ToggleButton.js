import React from "react";
import { useState } from "react";
import "../../styles/ToggleButton.css";
const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(true);
  const onToggle = () => setIsToggled(!isToggled);
  
  return (
    <div className="toggleButton">
      <label className="toggle-switch">
        <input type="checkbox" checked={!isToggled} onChange={onToggle} />
        <span className="switch" />
        <div className="values">
          <p
            className="value-1"
            style={{ color: isToggled ? "black" : "#949EA0" }}
          >
            On
          </p>
          <p
            className="value-2"
            style={{ color: !isToggled ? "black" : "#949EA0" }}
          >
            Off
          </p>
        </div>
      </label>
    </div>
  );
};

export default ToggleButton;
