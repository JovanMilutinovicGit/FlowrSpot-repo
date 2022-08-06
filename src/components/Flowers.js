import React from "react";
import FlowersList from "./FlowersList";
import './Flowers.css'
import heroImage from "../assets/heroImage.png";
const Flowers = () => {
    return(
        <div>
        <div className="hero-section">
           <img src={heroImage}/>
           <div className="discover">
            <h2>Discover flowers around you</h2>
            <p>Explore between more than 8.427 sightings</p>
            <div className="form-input">
            <span className="icon"><i className="fa fa-search"></i></span>
            <input
            placeholder="Looking for something specific?"
            />
            </div>
           </div>       
        </div>
        <div className="listOfFlowers">
        <FlowersList/>
        </div>
        </div>
    );
}
export default Flowers;