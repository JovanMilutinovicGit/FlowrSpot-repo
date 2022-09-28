/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { fetchUserSightings } from "../actions/Index.js";
import SightingCard from "./SightingCard.js";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import "../styles/UserSightings.css";

const UserSightings = ({ fetchUserSightings, user_sightings }) => {
  const prms = useParams();

  useEffect(() => {
    fetchUserSightings(prms.id);
  });

  const renderUserSightings = Object.values(user_sightings).map(
    ({
      id,
      name,
      description,
      picture,
      likes_count,
      comments_count,
      user: { full_name },
    }) => {
      return (
        <SightingCard
          id={id}
          key={id}
          name={name}
          description={description}
          picture={picture}
          likes={likes_count}
          comments={comments_count}
          flowerPic={picture}
          user={full_name}
          user_id={prms.id}
        />
      );
    }
  );
  return <div className="userSightingsList">{renderUserSightings}</div>;
};

const mapStateToProps = ({ userSightings }) => {
  return { user_sightings: userSightings };
};

export default connect(mapStateToProps, { fetchUserSightings })(UserSightings);
