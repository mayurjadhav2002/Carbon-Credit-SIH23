import React from 'react';
import L from 'leaflet';
import data from './data.json';
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import customIcon1 from './industry.png';

const PollutionGraph = () => {
  const customIcon = L.icon({
    iconUrl: customIcon1,
    iconSize: [32, 32],
  });

  function calculateCircleRadius(zoom) {
    // You can modify this function to calculate the circle radius based on zoom level
    return 1000;
  }

  // Create an array of markers from your data
  const markers = data.map((marker, index) => ({
    position: [marker.Latitude, marker.Longitude],
    title: marker.CompanyName,
  }));

  const handleMarkerClick = (event) => {
    alert(`Marker clicked: ${event.target.options.id}`);
  };

  return (
    <div>
      <MapContainer center={[19.097750771165753, 72.88665980683194]} zoom={13} style={{ height: '100vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add Markers, Circles, etc. here */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            id={marker.title}
            position={marker.position}
            eventHandlers={{
              click: handleMarkerClick,
            }}
            icon={customIcon}
          >
            <Circle
              center={marker.position}
              radius={calculateCircleRadius(18)} // Adjust the zoom level as needed
              pathOptions={{ color: 'green' }}
            />
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default PollutionGraph;
