import React from "react";
import Button from "../components/buttons/Button.js";

const NewAccount = ({ setCloseNewAcc }) => (
    <div className="form">
      <h2>Create an Account</h2>
      <div className="nameAndSurname">
        <input placeholder="Name" />
        <input placeholder="Surname" />
      </div>
      <div className="others">
        <input placeholder="Date of Birth" />
        <input placeholder="Email address" />
        <input placeholder="Password" type="password" />
      </div>
      <div className="btn">
        <Button name={"Create An Account"} />
      </div>
      <div className="cancel">
        <p onClick={(event) => setCloseNewAcc(false)}>
          I don't want to register
        </p>
      </div>
    </div>
);

export default NewAccount;
