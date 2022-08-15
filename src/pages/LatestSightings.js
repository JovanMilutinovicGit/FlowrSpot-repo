import React from "react";
import heroImage from "../assets/heroDetail.png";
import "../styles/LatestSighting.css";
import CardsList from "../components/CardsList";
import Button from "../components/buttons/Button.js";
import { Link } from "react-router-dom";
const LatestSightings = () => {
  return (
    <div className="LatestSightings">
      <div className="hero-sighting">
        <img src={heroImage} />
        <div className="sightingDescAndBtn">
          <div className="sightingDesc">
            <p className="p1">Sighting list</p>
            <p className="p2">Explore between more than 8.427 sightings</p>
          </div>
          <div className="sightingBtn">
            <Link to="/newSighting">
              <Button name={"+Add New Sighting"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="listOfCards">
        <CardsList />
      </div>
    </div>
  );
};
export default LatestSightings;
