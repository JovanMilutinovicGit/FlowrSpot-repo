import React from "react";
import FlowersList from "../components/FlowersList.js";
import InputSearch from "../components/inputs/InputSearch.js";
import "../styles/Flowers.css";

const Flowers = () => (
    <div className="flowers">
      <div className="discoverSearch">
        <InputSearch />
      </div>
      <div className="list">
        <FlowersList />
      </div>
    </div>
  );

export default Flowers;
