"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix for default marker icon in Next.js
const icon = L.icon({
  iconUrl: "/images/leaflet/marker-icon.png",
  iconRetinaUrl: "/images/leaflet/marker-icon-2x.png",
  shadowUrl: "/images/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function LeafletMap() {
  const position = [45.7381121, 4.8756813]; // Lyon 8e coordinates (1 Rue Transval)

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      className="h-full w-full rounded-lg z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={icon}>
        <Popup>
          Cabinet Anthony Salles <br /> 1 Rue Transval, 69008 Lyon
        </Popup>
      </Marker>
    </MapContainer>
  );
}
