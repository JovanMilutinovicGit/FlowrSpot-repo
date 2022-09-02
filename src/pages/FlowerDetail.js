import React from "react";
import heroDetail from "../assets/heroDetail.png";
import { Link } from "react-router-dom";
import Button from "../components/buttons/Button.js";
import "../styles/FlowerDetail.css";
import CardsList from "../components/CardsList";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchFlower } from "../actions/Index.js";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class FlowerDetail extends React.Component {
  componentDidMount() {
    this.props.fetchFlower(this.props.params.id);
  }

  render() {
    if (!this.props.flower) {
      return <div></div>;
    }

    return (
      <div className="flowerDetail">
        <div className="heroDetail">
          <img id="imgHero" src={heroDetail} />
          <div className="flowrImg">
            <img id="imgFlower" src={this.props.flower.profile_picture} />
          </div>
          <div className="heroDetailRight">
            <div className="fav">
              <i className="fa fa-star"></i>
              <span>{this.props.flower.sightings} sightings</span>
            </div>
            <div className="descAndBtn">
              <div className="desc">
                <h2>
                  <span>{this.props.flower.name}</span>
                </h2>
                <p>{this.props.flower.latin_name}</p>
              </div>
              <div className="btnAdd">
                <Link to="/newSighting">
                  <Button name={"+Add New Sighting"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="descriptionDetail">
          <div className="leftSideDescription">
            <p>Kingdom: Plantae</p>
            <p>Order: Asterales</p>
            <p>Family: Campanulaceae</p>
            <p>Species: P. grandiflorus</p>
          </div>
          <div className="rightSideDescription">
            <p>{this.props.flower.description}</p>
          </div>
        </div>
        <div className="listCards">
          <CardsList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fetchFlower }) => {
  return { flower: fetchFlower };
};
export default connect(mapStateToProps, { fetchFlower })(
  withParams(FlowerDetail)
);
