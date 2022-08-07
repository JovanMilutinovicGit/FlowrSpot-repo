import React from "react";
import cardImage from "../assets/cardImage.png"
import "./FlowersItem.css"

const FlowersItem = () => {
return (
    <div className="card">
    <div>
    <img src={cardImage}/>
    </div>
    <div className="description">
    <h2>Violet flower</h2>
    <h6 className="descriptionFlower">Platycodon grandiflorus</h6>
    </div>
    <div className="sightings">
    <p>127 sightings</p>
    </div>
    <div className="favorite">
    <span className="star"><i className="fa fa-star"></i></span>
    </div>
    </div>
);
}
export default FlowersItem;