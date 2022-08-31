import React from "react";
import cardImage from "../assets/cardImage.png";
import "../styles/SightingCard.css";
import CardDetail from "./CardDetail.js";

const SightingCard = () => (
    <div className="SightingCard">
      <div className="cardImage">
        <img src={cardImage} />
        <div className="location">
          <i className="fa fa-map-marker"></i>
          <span>San Francisco, US</span>
        </div>
      </div>
      <div className="cardDetail">
        <CardDetail />
      </div>
    </div>
  );

export default SightingCard;
