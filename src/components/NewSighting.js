import react from "react";
import "./NewSighting.css";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Logo from "../assets/pl-icon-photo.png";

const NewSighting = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyApf2jPfPflpwy0o8MG-VPfHJHDlO05XYg",
  });
  return (
    <div className="NewSighting">
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div className="map">
          <Map />
          <button>View on Google Maps</button>
        </div>
      )}
      <div className="backgroundForm">
        <div className="formNewSighting">
          <div className="title">
            <h1>Add New Sighting</h1>
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
              <button>Create New Sighting</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSighting;

function Map() {
  return (
    <GoogleMap
      zoom={9}
      center={{ lat: 42.887661, lng: 20.868401 }}
      mapContainerClassName="map"
      disableDefaultUI={true}
    >
      <Marker position={{ lat: 42.887661, lng: 20.868401 }} />
    </GoogleMap>
  );
}
