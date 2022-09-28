/* eslint-disable react/prop-types */
import React from "react";
import "../styles/User.css";
import profileImage from "../assets/profile-holder.png";
import Button from "../components/buttons/Button";
import UserSightings from "../components/UserSightings.js";

const User = () => (
  <div className="user">
    <div className="userContent">
      <div className="imgAndBtn">
        <div className="leftside">
          <div className="profileImg">
            <img src={profileImage} width="50px" />
          </div>
          <div className="username">
            <span className="span1">Micheal Barry</span>
            <span className="span2">47 sightings</span>
          </div>
        </div>
        <div className="button">
          <div className="btnReport">
            <Button name={"Report"} />
          </div>
        </div>
      </div>
      <div className="listCard">
        <UserSightings />
      </div>
    </div>
  </div>
);

export default User;
