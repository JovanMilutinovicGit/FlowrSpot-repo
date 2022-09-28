/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../actions/Index.js";

const Login = ({ setCloseLogin, login }) => {
  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    login(data);
    setCloseLogin(false);
  };

  return (
    <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
      <h2>Welcome back</h2>
      <div className="emailAndPass">
        <input
          placeholder="Email address"
          type="text"
          required
          {...register("email", {
            minLength: {
              value: 3,
              message: "Minimum length is 4",
            },
          })}
        />
        <input
          placeholder="Password"
          type="password"
          required
          {...register("password")}
        />
      </div>
      <div className="btn">
        <button>Login to your Account</button>
      </div>
      <div>
        <p className="cancel" onClick={() => setCloseLogin(false)}>
          I don't want to login
        </p>
      </div>
    </form>
  );
};

export default connect(null, { login })(Login);
