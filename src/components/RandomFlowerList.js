/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import RandomItem from "./RandomItem.js";
import "../styles/FlowersList.css";
import { fetchRandomFlowers } from "../actions/Index.js";
import { connect } from "react-redux";

const RandomFlowerList = ({ randomFlowers, fetchRandomFlowers }) => {
  useEffect(() => {
    fetchRandomFlowers();
  }, []);

  const listRandomFlowers = Object.values(randomFlowers).map(
    ({ id, name, latin_name, profile_picture, sightings }) => {
      return (
        <RandomItem
          key={id}
          id={id}
          name={name}
          latinName={latin_name}
          pic={profile_picture}
          sightings={sightings}
        />
      );
    }
  );

  return <div className="FlowersList">{listRandomFlowers}</div>;
};

const mapStateToProps = ({ random }) => ({ randomFlowers: random });

export default connect(mapStateToProps, { fetchRandomFlowers })(
  RandomFlowerList
);
