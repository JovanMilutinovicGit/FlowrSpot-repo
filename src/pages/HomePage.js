import React, { useState } from "react";
import FlowersList from "../components/FlowersList";
import "../styles/HomePage.css";
import InputSearch from "../components/inputs/InputSearch.js";
import heroImage from "../assets/heroImage.png";
const HomePage = () => {
  return (
    <div>
      <div className="hero-section">
        <img src={heroImage} />
        <div className="discover">
          <h2>Discover flowers around you</h2>
          <p>Explore between more than 8.427 sightings</p>
          <InputSearch />
        </div>
      </div>
      <FlowersList />
    </div>
  );
};
export default HomePage;
