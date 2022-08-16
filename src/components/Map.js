import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Button from "../components/buttons/Button.js";
const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyApf2jPfPflpwy0o8MG-VPfHJHDlO05XYg",
  });
  return (
    <div>
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <div className="map">
          <ShowMap />
          <Button name={"View On Google Maps"} />
        </div>
      )}
    </div>
  );
};
export default Map;

function ShowMap() {
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
