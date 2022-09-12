import React from "react";
import "../styles/NewSighting.css";
import Button from "../components/buttons/Button.js";
import Map from "../components/Map.js";
import Logo from "../assets/pl-icon-photo.png";
import { useForm } from "react-hook-form";

const NewSighting = () => {
  const { register } = useForm();

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
          <form>
            <div className="formInputs">
              <div className="formInputs-1">
                <input
                  className="firstInput"
                  placeholder="Title of the sighting"
                  type="text"
                  {...register("email", { required: true })}
                />
                <input placeholder="Coordinates of the sighting" />
                <button
                  type="file"
                  id="file_upload"
                  {...register("profile_picture")}
                >
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewSighting;
