/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import FlowersItem from "./FlowersItem.js";
import "../styles/FlowersList.css";
import { fetchFlowers } from "../actions/Index.js";
import { connect } from "react-redux";

const FlowersList = ({ flowers, fetchFlowers }) => {
  useEffect(() => {
    fetchFlowers();
  }, []);

  if (!fetchFlowers) {
    <div></div>;
  }

  const listFlowers = Object.values(flowers).map(
    ({ id, name, latin_name, profile_picture, sightings }) => {
      return (
        <FlowersItem
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

  return <div className="FlowersList">{listFlowers}</div>;
};

const mapStateToProps = ({ flowrs }) => ({ flowers: flowrs });

export default connect(mapStateToProps, { fetchFlowers })(FlowersList);
