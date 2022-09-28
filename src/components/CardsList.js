/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import SightingCard from "./SightingCard.js";
import "../styles/CardsList.css";
import { fetchSightings } from "../actions/Index.js";
import { connect } from "react-redux";

const CardsList = ({ sightings, fetchSightings }) => {
  useEffect(() => {
    fetchSightings();
  }, []);

  const renderListSightings = Object.values(sightings).map(
    ({
      id: id_sighting,
      name: flowerName,
      description,
      likes_count,
      comments_count,
      picture,
      user: { full_name, id },
      flower: { name, latin_name, profile_picture },
    }) => {
      return (
        <SightingCard
          key={id_sighting}
          id={id_sighting}
          name={flowerName}
          description={description}
          picture={picture}
          likes={likes_count}
          comments={comments_count}
          user={full_name}
          user_id={id}
          flowerName={name}
          flowerLatinName={latin_name}
          flowerPic={profile_picture}
        />
      );
    }
  );
  return <div className="CardList">{renderListSightings}</div>;
};
const mapStateToProps = ({ sightings }) => ({ sightings: sightings });

export default connect(mapStateToProps, { fetchSightings })(CardsList);
