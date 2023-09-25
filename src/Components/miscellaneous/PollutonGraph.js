import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import data from './data.json';
import { MapContainer, TileLayer, Marker, Popup,useMap } from 'react-leaflet';
import customIcon1 from './industry.png';

const PollutionGraph = () => {
  const [iconSize, setIconSize] = useState([32, 32]); // Initial icon size

  const customIcon = L.icon({
    iconUrl: customIcon1,
    iconSize: iconSize,
  });
  const markers = data.map((marker, index) => ({
    position: [marker.Latitude, marker.Longitude],
    title: marker.CompanyName,
  }));

  const handleMarkerClick = (event) => {
    alert(`Marker clicked: ${event.target.options.id}`);
  };
const handleMarkerHover = (e)=>{
  console.log(`Marker hover :  ${e.target.options.id}`)
}
  return (
    <div>
      <MapContainer center={[19.097750771165753, 72.88665980683194]} zoom={13} style={{ height: '100vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker
            key={index}
            id={marker.title}
            position={marker.position}
            eventHandlers={{
              click: handleMarkerClick,
              hover: handleMarkerHover,
            }}
            icon={customIcon}
          >
            <Popup>{marker.title}</Popup>
          </Marker>
        ))}
        <ZoomSizeUpdater setIconSize={setIconSize} />
      </MapContainer>
    </div>
  );
};

// CustomHook to update icon size based on map's zoom level
function ZoomSizeUpdater({ setIconSize }) {
  const map = useMap();

  // Update icon size when the zoom level changes
  useEffect(() => {
    function updateIconSize() {
      const zoom = map.getZoom();
      // You can adjust the size logic as needed
      const newSize = zoom < 10 ? [0, 0] : zoom < 15 ? [32, 32] : [30, 30];
      setIconSize(newSize);
    }

    map.on('zoomend', updateIconSize);
    updateIconSize(); // Initial size
    return () => {
      map.off('zoomend', updateIconSize);
    };
  }, [map, setIconSize]);

  return null;
}

export default PollutionGraph;
