import React, { useState } from "react";
import FlowersList from "./FlowersList";
import './HomePage.css'
import NewAccount from "./NewAccount.js"
import heroImage from "../assets/heroImage.png";
const HomePage = () => {

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
        <FlowersList/>

        </div>
    );
}
export default HomePage;