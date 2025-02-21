import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  // Set a default center for the map (e.g., Halifax, Nova Scotia)
  const center = [44.6488, -63.5752];
  const zoomLevel = 10;

  return (
    <div className="map-container">
      <MapContainer 
        center={center} 
        zoom={zoomLevel} 
        scrollWheelZoom={true} 
        style={{ height: '100%', width: '100%' }}
      >
        {/* Add the OpenStreetMap tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Add a marker at the center */}
        <Marker position={center}>
          <Popup>
            You are here! <br /> Halifax, Nova Scotia.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
