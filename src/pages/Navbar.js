/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import logo from "../assets/old.png";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile-holder.png";
import "../styles/Navbar.css";
import { useState } from "react";
import { connect } from "react-redux";
import { init } from "../actions/Index.js";
import jwt_decode from "jwt-decode";
import { getUsername } from "../actions/Index.js";

const Navbar = ({
  openModal,
  openLogin,
  openProfile,
  openSettings,
  init,
  token,
  getUsername,
  username,
}) => {
  const [icon, setIcon] = useState(false);

  if (token) {
    const decode = jwt_decode(token);
    getUsername(decode.user_id);
  }

  useEffect(() => {
    init();
  });

  const iconFunc = () => {
    if (icon) {
      setIcon(false);
    } else if (!icon) {
      setIcon(true);
    }
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={logo} width="140px" />
        </Link>
      </div>
      <div className={icon ? "nav-menu active" : "nav-menu"}>
        <div className="items">
          <Link
            to="/flowers"
            className="link"
            onClick={() => {
              iconFunc(true);
            }}
          >
            Flowers
          </Link>
          <Link
            to="/latestSightings"
            className="link"
            onClick={() => {
              iconFunc(true);
            }}
          >
            Latest Sightings
          </Link>
          <Link
            to="/favorites"
            className="link"
            onClick={() => {
              iconFunc(true);
            }}
          >
            Favorites
          </Link>
          <Link
            to=""
            className="link"
            onClick={() => {
              iconFunc(true);
              openSettings(true);
            }}
          >
            Settings
          </Link>
          {token && (
            <>
              <Link
                to=""
                className="link"
                onClick={() => {
                  iconFunc(true);
                }}
              >
                {username}
              </Link>

              <img
                src={profileImage}
                width="30px"
                onClick={() => {
                  openProfile(true);
                  iconFunc(true);
                }}
              />
            </>
          )}
          {!token && (
            <>
              <Link
                to=""
                className="link"
                onClick={() => {
                  openLogin(true);
                  iconFunc(true);
                }}
              >
                Login
              </Link>

              <button
                id="button"
                onClick={() => {
                  openModal(true);
                  iconFunc(true);
                }}
              >
                New Account
              </button>
            </>
          )}
        </div>
      </div>
      <i
        className={icon ? "fa fa-times" : "fa fa-bars"}
        onClick={() => {
          iconFunc(true);
        }}
      ></i>
    </div>
  );
};

const mapStateToProps = ({ init, name }) => ({
  token: init,
  username: name,
});

export default connect(mapStateToProps, { init, getUsername })(Navbar);
