import React, { useState } from "react";
import RandomFlowerList from "../components/RandomFlowerList.js";
import "../styles/HomePage.css";
import InputSearch from "../components/inputs/InputSearch.js";
import heroImage from "../assets/heroImage.png";
import ListResultsOfSearch from "../components/ListResultsOfSearch.js";

const HomePage = () => {
  const [value, setValue] = useState("");

  const func = (val) => {
    setValue(val);
  };

  return (
    <div>
      <div className="hero-section">
        <img src={heroImage} />
        <div className="discover">
          <h2>Discover flowers around you</h2>
          <p>Explore between more than 8.427 sightings</p>
          <InputSearch set={func} />
        </div>
      </div>
      {!value ? <RandomFlowerList /> : <ListResultsOfSearch />}
    </div>
  );
};
export default HomePage;
