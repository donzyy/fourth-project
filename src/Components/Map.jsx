import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix the default icon issue in Leaflet
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet icon issue for React-Leaflet v4.x
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Map = () => {
  return (
    <div style={{ height: "500px" }} className="z-[10]">
      <MapContainer
        center={[5.6130923, -0.1991566]}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }} // Ensure height and width are set
        attributionControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[5.6130923, -0.1991566]}>
          <Popup>No. 24 Odotei Tsui Avenue, Dzorwulu, Accra, Ghana</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
