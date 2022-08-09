import React from "react";

const Login = () => {
    return(
        <div className="formLogin" >
        <h2>Welcome back</h2>
          <div className="emailAndPass">
            <input placeholder="Email address"/>
            <input placeholder="Password" type="password"/>
          </div>
          <div className="btn">
          <button>Login to your Account</button>
          </div>
          <div>
            <p className="cancel">I don't want to login</p>
          </div>
        </div>
    );
}
export default Login;