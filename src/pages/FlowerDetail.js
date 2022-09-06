/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import heroDetail from "../assets/heroDetail.png";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button.js";
import "../styles/FlowerDetail.css";
/*import CardsList from "../components/CardsList";*/
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFlower } from "../actions/Index.js";
import FlowerSightingsList from "../components/FlowerSightingsList";

const FlowerDetail = ({ flower, fetchFlower }) => {
  const params = useParams();

  const { profile_picture, sightings, name, latin_name, description } = flower;
  useEffect(() => {
    fetchFlower(params.id);
  }, []);

  return (
    <div className="flowerDetail">
      <div className="heroDetail">
        <img id="imgHero" src={heroDetail} />
        <div className="flowrImg">
          <img id="imgFlower" src={profile_picture} />
        </div>
        <div className="heroDetailRight">
          <div className="fav">
            <i className="fa fa-star"></i>
            <span>{sightings} sightings</span>
          </div>
          <div className="descAndBtn">
            <div className="desc">
              <h2>
                <span>{name}</span>
              </h2>
              <p>{latin_name}</p>
            </div>
            <div className="btnAdd">
              <Link to="/newSighting">
                <Button name={"+Add New Sighting"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="descriptionDetail">
        <div className="leftSideDescription">
          <p>Kingdom: Plantae</p>
          <p>Order: Asterales</p>
          <p>Family: Campanulaceae</p>
          <p>Species: P. grandiflorus</p>
        </div>
        <div className="rightSideDescription">
          <p>{description}</p>
        </div>
      </div>
      <div className="listCards">
        <FlowerSightingsList />
      </div>
    </div>
  );
};

const mapStateToProps = ({ fetchFlower }) => {
  return { flower: fetchFlower };
};
export default connect(mapStateToProps, { fetchFlower })(FlowerDetail);
