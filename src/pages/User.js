import React from "react";
import "../styles/User.css";
import CardsList from "../components/CardsList.js";
import profileImage from "../assets/profile-holder.png";
import Button from "../components/buttons/Button";
const User = () => {
  return (
    <div className="user">
      <div className="userContent">
        <div className="imgAndBtn">
          <div className="leftside">
            <div className="profileImg">
              <img src={profileImage} width="50px" />
            </div>
            <div className="username">
              <span className="span1">Adam Moore</span>
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
          <CardsList />
        </div>
      </div>
    </div>
  );
};

export default User;
