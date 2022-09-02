import React from "react";
import RandomItem from "./RandomItem.js";
import "../styles/FlowersList.css";
import { fetchRandomFlowers } from "../actions/Index.js";
import { connect } from "react-redux";

class RandomFlowerList extends React.Component {
  componentDidMount() {
    this.props.fetchRandomFlowers();
  }

  render() {
    const listRandomFlowers = this.props.randomFlowers.map((flower) => {
      return (
        <RandomItem
          key={flower.id}
          id={flower.id}
          name={flower.name}
          latinName={flower.latin_name}
          pic={flower.profile_picture}
          sightings={flower.sightings}
        />
      );
    });

    return <div className="FlowersList">{listRandomFlowers}</div>;
  }
}

const mapStateToProps = ({ random }) => {
  return { randomFlowers: Object.values(random) };
};

export default connect(mapStateToProps, { fetchRandomFlowers })(
  RandomFlowerList
);
