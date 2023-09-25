import React, { useEffect, useState, useContext } from 'react';
import L from 'leaflet';
import Sidebar from './Sidebar'
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import customIcon1 from '../miscellaneous/industry.png';
import Datacontext from '../../context/Datacontext';
const Governmap = () => {
  var context = useContext(Datacontext);
  const [iconSize, setIconSize] = useState([32, 32]);
  const [circleRadius, setCircleRadius] = useState(1000);
  var {getfactory,factory} = context
  const customIcon = L.icon({
    iconUrl: customIcon1,
    iconSize: iconSize,
  });
  const handleMarkerClick = (event) => {
    alert(`Marker clicked: ${event.target.options.id}`);
  };
  useEffect(() => {
    if (factory.length === 0) {
        getfactory();
        getfactory();
    }
}, [factory])


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
                  {factory.length > 0 && factory.map((marker) => {
                    return (
                      <>
                        <Circle center={[marker.Latitude, marker.Longitude]} radius={circleRadius}
                          pathOptions={{ fillColor: 'red',
    fillOpacity: 0.2,
    color: 'transparent',}} />
                            <Marker
                              key={marker._id}
                              id={marker.CompanyName}
                              position={[marker.Latitude, marker.Longitude]}
                              eventHandlers={{
                                click: handleMarkerClick,
                              }}
                              icon={customIcon}
                            >
        <ZoomSizeUpdater setIconSize={setIconSize} />

                              <Popup>{marker.CompanyName}</Popup>

                            </Marker>
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
  function ZoomSizeUpdater({ setIconSize }) {
    const map = useMap();
  
    // Update icon size when the zoom level changes
    useEffect(() => {
      function updateIconSize() {
        const zoom = map.getZoom();
        const newSize = zoom < 10 ? [4, 4] : zoom < 15 ? [15, 15] : [30, 30];
        setIconSize(newSize);
        const newRadius = zoom < 10 ? 1000 : zoom < 15 ? 750 : 500;
                      setCircleRadius(newRadius);

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