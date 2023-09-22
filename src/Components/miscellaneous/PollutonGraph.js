import React from 'react'
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup,Circle  } from 'react-leaflet';
import customIcon1 from './industry.png';
const PollutonGraph = () => {
  const customIcon = L.icon({
    iconUrl: customIcon1,
    iconSize: [32, 32],
  });
  function calculateCircleRadius(zoom) {
    return 1000
  }
  const markers = [
    {
      position: [19.097750771165753, 72.88665980683194],
      title: 'Marker 1',
    },
    {
      position: [51.51, -0.1],
      title: 'Marker 2',
    },
  ];
  const handleMarkerClick = (event) => {
    alert(`Marker clicked:${event.target.options.id}`);
  };
    return (
      <div >
      <MapContainer  center={[19.097750771165753, 72.88665980683194]} zoom={13} style={{ height: '100vh' }}>
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
              radius={calculateCircleRadius(8)}
              pathOptions={{ color: 'green' }}
            />
              <Popup>{marker.title}</Popup>
            </Marker>
          ))}
        </MapContainer>
        </div>
      )
}

export default PollutonGraph