import React from "react";
import "../styles/FlowersItem.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { SelectFlower } from "../actions/Index.js";
import { useDispatch } from "react-redux";
const FlowersItem = ({ id, pic, name, latinName, sightings, selectFlowr }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(SelectFlower(selectFlowr));
  };

  return (
    <div className="card">
      <div>
        <Link to={`/flowerDetail/${id}`}>
          <img src={pic} onClick={handleClick} />
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
      <div className="favorite">
        <span className="star">
          <i className="fa fa-star"></i>
        </span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { select: state.selected };
};
export default connect(mapStateToProps, { SelectFlower })(FlowersItem);
