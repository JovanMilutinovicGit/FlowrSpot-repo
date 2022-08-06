import  React from "react";
import  ReactDOM  from "react-dom";
const Modal = props => {
    return ReactDOM.createPortal(
    <div >
        <input/>
        <input/>
    </div>,
    document.querySelector('#Modal')
    );
};
export default Modal;