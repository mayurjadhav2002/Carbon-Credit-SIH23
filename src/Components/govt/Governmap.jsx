import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import data from './data.json';
import Sidebar from './Sidebar'
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import customIcon1 from '../miscellaneous/industry.png';
const Governmap = () => {
  const [iconSize, setIconSize] = useState([32, 32]); // Initial icon size

  const customIcon = L.icon({
    iconUrl: customIcon1,
    iconSize: iconSize,
  });

  function calculateCircleRadius(zoom) {
    // You can modify this function to calculate the circle radius based on zoom level
    return 1000;
  }
  const handleMarkerClick = (event) => {
    alert(`Marker clicked: ${event.target.options.id}`);
  };
  return (
    <>
      <div className='flex justify-start '>

        <Sidebar />
        <div class="sm:ml-64 w-full mt-10">
          <div class="rounded-lg dark:border-gray-700 mt-10">
            <div class=" items-center w-full justify-center mb-4  bg-white dark:bg-gray-800">
              <div>
                <MapContainer center={[19.097750771165753, 72.88665980683194]} zoom={13} style={{ height: '100vh' }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {data.map((marker, mainindex) => {
                    var main = marker.Data
                    const dynamicRadius = calculateDynamicRadius(main.length);
                    return (
                      <>
                    
                          <Circle center={[marker.AvgLatitude, marker.AvgLongitude]} radius={dynamicRadius}
                            pathOptions={{ color: 'green' }} />
                       
                     
                      {main.map((mark, index) => {
                        return (
                        <Marker
                          key={mainindex * index}
                          id={mark.CompanyName}
                          position={[mark.Latitude, mark.Longitude]}
                          eventHandlers={{
                            click: handleMarkerClick,
                          }}
                          icon={customIcon}
                        >
                          <ZoomSizeUpdater setIconSize={setIconSize} />
                          <Popup>{mark.CompanyName}</Popup>

                        </Marker>
                        )
                      })}
                      </>
                    )
                  })}
                </MapContainer>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
  function calculateDynamicRadius(numMarkers) {
    const minimumRadius = 100; // Set your minimum radius here
  
    // Calculate the radius based on your criteria
    const dynamicRadius = minimumRadius + numMarkers * 100; // Adjust the multiplier as needed
  
    return dynamicRadius;
  }

  function ZoomSizeUpdater({ setIconSize }) {
    const map = useMap();
    useEffect(() => {
      function updateIconSize() {
        const zoom = map.getZoom();
        // You can adjust the size logic as needed
        const newSize = zoom < 10 ? [0, 0] : zoom < 15 ? [30, 30] : [20, 20];
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

}

export default Governmap;