import React from "react";
import "../styles/Modal.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ children }) => (
  <div>
    <div className="backGround"></div>
    <div>{children}</div>
  </div>
);

export default Modal;
