/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from "react";
import Button from "../components/buttons/Button.js";
import { useForm } from "react-hook-form";
import { createProfile } from "../actions/Index.js";
import { connect } from "react-redux";

const NewAccount = ({ setCloseNewAcc, createProfile }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    createProfile(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Create an Account</h2>
      <div className="nameAndSurname">
        <input
          placeholder="Name"
          type="text"
          required
          {...register("first_name", {
            minLength: {
              value: 5,
              message: "Minimum length is 5",
            },
          })}
        />

        <input
          placeholder="Surname"
          type="text"
          required
          {...register("last_name", {
            minLength: {
              value: 5,
              message: "Minimum length is 5",
            },
          })}
        />
      </div>
      <div className="others">
        <input
          placeholder="Date of Birth"
          type="text"
          required
          {...register("date_of_birth")}
        />
        <input
          placeholder="Email address"
          required
          type="text"
          {...register("email")}
        />
        <input
          placeholder="Password"
          type="password"
          required
          {...register("password", {
            minLength: {
              value: 5,
              message: "Minimum length is 5",
            },
          })}
        />
      </div>
      <div className="btn">
        <Button name={"Create An Account"} />
      </div>
      <div className="cancel">
        <p onClick={() => setCloseNewAcc(false)}>I don't want to register</p>
      </div>
    </form>
  );
};
export default connect(null, { createProfile })(NewAccount);
