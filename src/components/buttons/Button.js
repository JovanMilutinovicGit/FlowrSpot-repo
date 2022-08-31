import React from "react";
import "../../styles/Button.css";
const Button = ({ name }) => (
  <div className="addNewSightingButton">
    <button>{name}</button>
  </div>
);

export default Button;
