import react from "react";
import "../styles/NewSighting.css";
import Button from "../components/buttons/Button.js";
import Map from "../components/Map.js";
import Logo from "../assets/pl-icon-photo.png";

const NewSighting = () => {
  return (
    <div className="NewSighting">
      <div className="map">
        <Map />
        <div className="buttonOnGoogleMaps">
          <Button name={"View On Google Maps"} />
        </div>
      </div>
      <div className="backgroundForm">
        <div className="formNewSighting">
          <div className="title">
            <h1>
              <span>Add New Sighting</span>
            </h1>
            <p>Explore between more than 8.427 sightings</p>
          </div>
          <div className="formInputs">
            <div className="formInputs-1">
              <input
                className="firstInput"
                placeholder="Title of the sighting"
              />
              <input placeholder="Coordinates of the sighting" />
              <button>
                <img src={Logo} />
                Add a photo
              </button>
            </div>
            <div className="formInputs-2">
              <input
                className="firstInput"
                placeholder="Write a description…"
              />
            </div>
            <div className="createButton">
              <div className="button">
                <Button name={"Create New Sighting"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSighting;
