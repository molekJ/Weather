import React from "react";
import GoogleMapReact from "google-map-react";

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 52.03238,
      lng: 23.11652,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "300px", width: "300px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAhMNDTEq8ATGg9-mmj7yVxhB4Pb6TInaY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
