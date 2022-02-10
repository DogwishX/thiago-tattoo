import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./Map.css";

function Map() {
  useEffect(() => {
    const mapAttribution = document.querySelector(
      ".leaflet-control-attribution"
    );
    mapAttribution.style = "display: none;";
  });
  return (
    <MapContainer center={[51.505, -0.09]} zoom={17}>
      <TileLayer
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
