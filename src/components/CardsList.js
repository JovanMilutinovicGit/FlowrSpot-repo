import React from "react";
import SightingCard from "./SightingCard.js";
import "../styles/CardsList.css";
import { fetchSightings } from "../actions/Index.js";
import { connect } from "react-redux";

class CardsList extends React.Component {
  componentDidMount() {
    this.props.fetchSightings();
  }
  render() {
    const listOfSightings = this.props.sightings.map((sighting, index) => {
      return (
        <SightingCard
          key={index}
          id={sighting.id}
          name={sighting.name}
          description={sighting.description}
          picture={sighting.picture}
          likes={sighting.likes_count}
          comments={sighting.comments_count}
          user={sighting.user.full_name}
          flowerName={sighting.flower.name}
          flowerLatinName={sighting.flower.latin_name}
          flowerPic={sighting.flower.profile_picture}
        />
      );
    });
    return <div className="CardList">{listOfSightings}</div>;
  }
}
const mapStateToProps = ({ sightings }) => {
  return { sightings: Object.values(sightings) };
};

export default connect(mapStateToProps, { fetchSightings })(CardsList);
