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
      id,
      name,
      description,
      picture,
      likes_count,
      comments_count,
      user: { full_name },
      flower: { nameFlower, latin_name, profile_picture },
    }) => {
      return (
        <SightingCard
          key={id}
          id={id}
          name={name}
          description={description}
          picture={picture}
          likes={likes_count}
          comments={comments_count}
          user={full_name}
          flowerName={nameFlower}
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
