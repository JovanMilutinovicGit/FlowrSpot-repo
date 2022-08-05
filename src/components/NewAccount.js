import  React from "react";
import  ReactDOM  from "react-dom";

const NewAccount = (props) => {
    return ReactDOM.createPortal(
    <div >
        <input/>
        <input/>
        <input/>
        <input/>
    </div>,
    document.querySelector('#NewAccount')
    );
};
export default NewAccount;