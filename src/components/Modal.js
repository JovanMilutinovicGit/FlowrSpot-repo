import React from "react";
import "../styles/Modal.css";
const Modal = ({ children }) => {
  return (
    <div>
      <Layout />
      <div>{children}</div>
    </div>
  );
};

const Layout = () => {
  return <div className="backGround"></div>;
};

export default Modal;
