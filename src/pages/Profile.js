/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import profileImg from "../assets/profile-holder.png";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/Index.js";
import { getMyInfo } from "../actions/Index.js";

const Profile = ({ setCloseProfile, logoutUser, getMyInfo, user }) => {
  const { first_name, last_name } = user;

  useEffect(() => {
    getMyInfo();
  }, []);

  return (
    <div className="profile">
      <div className="close">
        <i
          className="fa fa-times"
          onClick={() => {
            setCloseProfile(false);
          }}
        ></i>
      </div>
      <div className="info-1">
        <div className="imgAndSigh">
          <div className="image">
            <img src={profileImg} width="70px" />
          </div>
          <div className="nameAndSigh">
            <h2>
              <span>{`${first_name} ${last_name}`}</span>
            </h2>
            <p>47 sightings</p>
          </div>
        </div>
      </div>
      <div className="info-2">
        <div className="basicInfo">
          <label>First Name</label>
          <span>{first_name}</span>
          <label>Last Name</label>
          <span>{last_name}</span>
          <label>Date of Birth</label>
          <span>May 20, 1980</span>
          <label>Email address</label>
          <span>{`${first_name}.${last_name}@gmail.com`}</span>
        </div>
      </div>
      <div className="btnLogout">
        <Link to="/">
          <button
            onClick={() => {
              logoutUser();
              setCloseProfile(false);
            }}
          >
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = ({ myInfo }) => ({ user: myInfo });

export default connect(mapStateToProps, { logoutUser, getMyInfo })(Profile);
