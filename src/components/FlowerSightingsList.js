/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { fetchSightingListCurrentlyFlower } from "../actions/Index.js";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import SightingCard from "./SightingCard.js";
import "../styles/FlowerSightingList.css";

const FlowerSightingList = ({
  fetchSightingListCurrentlyFlower,
  sightings,
}) => {
  const params = useParams();

  useEffect(() => {
    fetchSightingListCurrentlyFlower(params.id);
  }, []);

  const listOfSightings = sightings.map(
    ({
      id,
      name,
      description,
      picture,
      likes_count,
      comments_count,
      user: { full_name },
      flower: { profile_picture },
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
          flowerPic={profile_picture}
        />
      );
    }
  );

  // eslint-disable-next-line react/react-in-jsx-scope
  return <div className="flowerSightingList">{listOfSightings}</div>;
};

const mapStateToProps = ({ currentlySightings }) => ({
  sightings: Object.values(currentlySightings),
});

export default connect(mapStateToProps, { fetchSightingListCurrentlyFlower })(
  FlowerSightingList
);
