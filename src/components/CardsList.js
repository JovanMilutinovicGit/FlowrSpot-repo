import React from "react";
import SightingCard from "./SightingCard.js";
import "../styles/CardsList.css";
const CardsList = () => {
  return (
    <div className="CardList">
      <SightingCard />
      <SightingCard />
      <SightingCard />
      <SightingCard />
    </div>
  );
};
export default CardsList;
