/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchFavorites } from "../actions/Index.js";
import FlowersItem from "./FlowersItem";
import "../styles/FavoriteList.css";

const FavoritesList = ({ fetchFavorites, favorites }) => {
  useEffect(() => {
    fetchFavorites();
  });

  const listOfFavorites = Object.values(favorites).map(
    ({
      id: fav_id,
      flower: { id, name, latin_name, profile_picture, sightings, favorite },
    }) => {
      return (
        <FlowersItem
          id={id}
          key={id}
          name={name}
          latinName={latin_name}
          pic={profile_picture}
          sightings={sightings}
          isFavorite={favorite}
          fav_id={fav_id}
        />
      );
    }
  );
  return <div className="favoritesList">{listOfFavorites}</div>;
};

const mapStateToProps = ({ favorites }) => ({ favorites: favorites });

export default connect(mapStateToProps, { fetchFavorites })(FavoritesList);
