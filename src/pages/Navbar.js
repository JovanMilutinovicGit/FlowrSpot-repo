import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import profileImage from "../assets/profile-holder.png";
import "../styles/Navbar.css";

const Navbar = ({ openModal, openLogin, logged, openProfile }) => {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} width="25px" />
        <Link to="/" className="flowrSpot">
          FlowrSpot
        </Link>
      </div>
      <div className="rightSide">
        <Link to="/flowers" className="link">
          Flowers
        </Link>
        <Link to="/latestSightings" className="link">
          Latest Sightings
        </Link>
        <Link to="/favorites" className="link">
          Favorites
        </Link>
        {logged ? (
          <Link to="/user" className="link">
            John Doe
          </Link>
        ) : (
          <button id="login" onClick={(event) => openLogin(true)}>
            Login
          </button>
        )}
        {logged ? (
          <img
            src={profileImage}
            width="30px"
            onClick={(e) => {
              openProfile(true);
            }}
          />
        ) : (
          <button id="button" onClick={(event) => openModal(true)}>
            New Account
          </button>
        )}
      </div>
      <i className="fa fa-bars"></i>
    </div>
  );
};
export default Navbar;
