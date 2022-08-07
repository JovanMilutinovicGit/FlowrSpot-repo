import  React from "react";
import  ReactDOM  from "react-dom";
import "./NewAccount.css"
const NewAccount = ({children}) => {
    return ReactDOM.createPortal(
    <div>
        <Layout/>
        <div>
        {children}
        </div>
    </div>,
    document.querySelector('#newaccount')
    );
};

const Layout = () =>{
    return(
        <div className="backGround"></div>
    );
}

export default NewAccount;