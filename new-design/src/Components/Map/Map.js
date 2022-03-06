import React, { useEffect } from "react";
import Title from "../Core/Title";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./Map.css";

function Map({ coords }) {
  useEffect(() => {
    const mapAttribution = document.querySelector(
      ".leaflet-control-attribution"
    );
    mapAttribution.style = "display: none;";
  });
  return (
    <div className="map">
      <Title id="map__title">Find me!</Title>
      <MapContainer center={coords} zoom={16}>
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>
            Thiago Tattoo <br /> Geek tattoos
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
