import React from "react";
import Button from "../components/buttons/Button.js";
import { useForm } from "react-hook-form";

const NewAccount = ({ setCloseNewAcc }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Create an Account</h2>
      <div className="nameAndSurname">
        <input
          placeholder="Name"
          type="text"
          {...register("firstName", {
            required: true,
            minLength: {
              value: 3,
              message: "Minimum length is 4",
            },
          })}
        />

        <input
          placeholder="Surname"
          type="text"
          {...register("lastName", { required: true })}
        />
      </div>
      <div className="others">
        <input
          placeholder="Date of Birth"
          type="text"
          {...register("date_of_birth", { required: true })}
        />
        <input
          placeholder="Email address"
          type="text"
          {...register("email", { required: true })}
        />
        <input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
        />
      </div>
      <div className="btn">
        <Button name={"Create An Account"} />
      </div>
      <div className="cancel">
        <p onClick={(event) => setCloseNewAcc(false)}>
          I don't want to register
        </p>
      </div>
    </form>
  );
};
export default NewAccount;
