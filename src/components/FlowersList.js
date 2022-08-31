import React from "react";
import FlowersItem from "./FlowersItem.js";
import "../styles/FlowersList.css";
import { fetchFlowers } from "../actions/Index.js";
import { connect } from "react-redux";
class FlowersList extends React.Component {
  componentDidMount() {
    this.props.fetchFlowers();
  }

  render() {
    const listFlowers = this.props.flowers.map((flower) => {
      return (
        <FlowersItem
          key={flower.id}
          id={flower.id}
          name={flower.name}
          latinName={flower.latin_name}
          pic={flower.profile_picture}
          sightings={flower.sightings}
          selectFlowr={flower}
        />
      );
    });

    return <div className="FlowersList">{listFlowers}</div>;
  }
}

const mapStateToProps = (state) => {
  return { flowers: Object.values(state.flowrs) /*select: state.selected */ };
};
export default connect(mapStateToProps, { fetchFlowers /*, SelectFlower*/ })(
  FlowersList
);
