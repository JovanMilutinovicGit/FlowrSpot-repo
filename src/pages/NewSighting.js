/* eslint-disable react/prop-types */
import React from "react";
import "../styles/NewSighting.css";
import Button from "../components/buttons/Button.js";
import Map from "../components/Map.js";
import { createSighting } from "../actions/Index.js";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const NewSighting = ({ createSighting }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    createSighting(data);
    console.log(data);
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formInputs">
              <div className="formInputs-1">
                <input
                  className="firstInput"
                  placeholder="Title of the sighting"
                  type="text"
                  required
                  {...register("name")}
                />
                <input
                  type="number"
                  placeholder="flower id"
                  {...register("flower_id")}
                />
                <input
                  type="number"
                  placeholder="Latitude"
                  {...register("latitude")}
                />
                <input
                  type="number"
                  placeholder="Longitude"
                  {...register("longitude")}
                />
                <input
                  type="file"
                  id="file_upload"
                  accept="image/*"
                  multiple
                  {...register("picture")}
                />
              </div>
              <div className="formInputs-2">
                <input
                  className="firstInput"
                  placeholder="Write a description…"
                  {...register("description")}
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

export default connect(null, { createSighting })(NewSighting);
