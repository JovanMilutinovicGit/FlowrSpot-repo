import React from "react";
import "../../styles/InputSearch.css";
const InputSearch = () => {
  return (
    <div className="form-input">
      <span className="icon">
        <i className="fa fa-search"></i>
      </span>
      <input placeholder="Looking for something specific?" />
    </div>
  );
};

export default InputSearch;
