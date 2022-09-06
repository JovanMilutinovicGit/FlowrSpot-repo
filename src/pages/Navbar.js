/* eslint-disable react/prop-types */
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile-holder.png";
import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = ({
  openModal,
  openLogin,
  logged,
  openProfile,
  openSettings,
}) => {
  const [icon, setIcon] = useState(false);

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
        <img src={logo} width="25px" />
        <Link to="/" className="flowrSpot">
          FlowrSpot
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
          {logged ? (
            <Link
              to="/user"
              className="link"
              onClick={() => {
                iconFunc(true);
              }}
            >
              John Doe
            </Link>
          ) : (
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
          )}
          {logged ? (
            <img
              src={profileImage}
              width="30px"
              onClick={() => {
                openProfile(true);
                iconFunc(true);
              }}
            />
          ) : (
            <button
              id="button"
              onClick={() => {
                openModal(true);
                iconFunc(true);
              }}
            >
              New Account
            </button>
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
export default Navbar;
