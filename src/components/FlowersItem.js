/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../styles/FlowersItem.css";
import { Link } from "react-router-dom";
import { markFavorite } from "../actions/Index.js";
import { connect } from "react-redux";
import { unpinFavorite } from "../actions/Index.js";

const FlowersItem = ({
  id,
  pic,
  name,
  latinName,
  sightings,
  markFavorite,
  isFavorite,
  fav_id,
  unpinFavorite,
}) => {
  return (
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
          if (isFavorite) {
            unpinFavorite(id, fav_id);
          } else if (!isFavorite) {
            markFavorite(id, true);
          }
        }}
      >
        <span className="star">
          <i className="fa fa-star"></i>
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = ({ favorites }) => ({ favorite: favorites });

export default connect(mapStateToProps, { markFavorite, unpinFavorite })(
  FlowersItem
);
