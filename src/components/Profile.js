import React from "react";
import profileImg from "../assets/profile-holder.png";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <div className="close">
        <i className="fa fa-times"></i>
      </div>
      <div className="info-1">
        <div className="imgAndSigh">
          <div className="image">
            <img src={profileImg} width="70px" />
          </div>
          <div className="nameAndSigh">
            <h2>Micheal Berry</h2>
            <p>47 sightings</p>
          </div>
        </div>
      </div>
      <div className="info-2">
        <div className="basicInfo">
          <label>First Name</label>
          <span>Micheal</span>
          <label>Last Name</label>
          <span>Berry</span>
          <label>Date of Birth</label>
          <span>May 20, 1980</span>
          <label>Email address</label>
          <span>michael.berry@gmail.com</span>
        </div>
      </div>
      <div className="btnLogout">
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Profile;
