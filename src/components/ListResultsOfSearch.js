/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import FlowersItem from "./FlowersItem.js";
import { connect } from "react-redux";

const ListResultsOfSearch = ({ results }) => {
  if (!results) {
    <div>Lodaing..</div>;
  }

  const listOfResults = Object.values(results).map(
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
  return <div className="resultsList">{listOfResults}</div>;
};

const mapStateToProps = ({ searchResult }) => ({ results: searchResult });

export default connect(mapStateToProps)(ListResultsOfSearch);
