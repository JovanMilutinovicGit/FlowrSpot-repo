/* eslint-disable react/prop-types */
import React from "react";
import "../styles/FlowersItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { markFavorite } from "../actions/Index";

const RandomItem = ({ id, pic, name, latinName, sightings, markFavorite }) => (
  <div className="card">
    <div>
      <Link to={`/flowerDetail/${id}`}>
        <img src={pic} />
      </Link>
    </div>
    <div className="description">
      <h2>
        <span>{name}</span>
      </h2>
      <h6 className="descriptionFlower">{latinName}</h6>
      <div className="sightings">
        <p>{sightings} sightings</p>
      </div>
    </div>
    <div
      className="favorite"
      onClick={() => {
        markFavorite(id, true);
      }}
    >
      <span className="star">
        <i className="fa fa-star"></i>
      </span>
    </div>
  </div>
);

export default connect(null, { markFavorite })(RandomItem);
