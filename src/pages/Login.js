import React from "react";

const Login = ({ setCloseLogin, setLogin }) => {
  return (
    <div className="formLogin">
      <h2>Welcome back</h2>
      <div className="emailAndPass">
        <input placeholder="Email address" />
        <input placeholder="Password" type="password" />
      </div>
      <div className="btn">
        <button
          onClick={(e) => {
            setLogin(true);
            setCloseLogin(false);
          }}
        >
          Login to your Account
        </button>
      </div>
      <div>
        <p className="cancel" onClick={(event) => setCloseLogin(false)}>
          I don't want to login
        </p>
      </div>
    </div>
  );
};
export default Login;
