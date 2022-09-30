/* eslint-disable react/prop-types */
import React, { useState } from "react";
import FlowersList from "../components/FlowersList.js";
import ListResultsOfSearch from "../components/ListResultsOfSearch.js";
import InputSearch from "../components/inputs/InputSearch.js";
import { connect } from "react-redux";
import "../styles/Flowers.css";

const Flowers = () => {
  const [value, setValue] = useState("");

  const func = (val) => {
    setValue(val);
  };

  return (
    <div className="flowers">
      <div className="discoverSearch">
        <InputSearch set={func} />
      </div>
      <div className="list">
        {!value ? <FlowersList /> : <ListResultsOfSearch />}
      </div>
    </div>
  );
};
const mapStateToProps = ({ searchResult }) => ({ results: searchResult });
export default connect(mapStateToProps)(Flowers);
