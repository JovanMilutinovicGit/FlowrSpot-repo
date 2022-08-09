import  React from "react";
import  ReactDOM  from "react-dom";
import "./Modal.css"
const Modal = ({children}) => {
    return ReactDOM.createPortal(
    <div>
        <Layout/>
        <div>
        {children}
        </div>
    </div>,
    document.querySelector('#modal')
    );
};

const Layout = () =>{
    return(
        <div className="backGround"></div>
    );
}

export default Modal;