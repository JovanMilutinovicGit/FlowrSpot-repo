/* eslint-disable react/prop-types */
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { G_MAP_API_KEY } from "../env/api_keys";

const Map = ({ lat, longitude }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: G_MAP_API_KEY,
  });
  return (
    <div>
      {isLoaded ? (
        <div className="map">
          <ShowMap param={lat} param2={longitude} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Map;

const ShowMap = ({ param, param2 }) => {
  return (
    <GoogleMap
      zoom={9}
      center={{ lat: param, lng: param2 }}
      mapContainerClassName="map"
      disableDefaultUI
    >
      <Marker position={{ lat: param, lng: param2 }} />
    </GoogleMap>
  );
};
