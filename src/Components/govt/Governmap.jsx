import React, { useEffect, useState, useContext } from 'react';
import L from 'leaflet';
import Sidebar from './Sidebar'
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import customIcon1 from '../miscellaneous/industry.png';
import Datacontext from '../../context/Datacontext';
const Governmap = () => {
  var context = useContext(Datacontext);
  const [iconSize, setIconSize] = useState([32, 32]);
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
                  {factory.length > 0 && factory.map((marker, mainindex) => {
                    var main = marker.Data
                    const dynamicRadius = calculateDynamicRadius(main.length);
                    return (
                      <>

                        <Circle center={[marker.AvgLatitude, marker.AvgLongitude]} radius={dynamicRadius}
                          pathOptions={{ color: 'green' }} />
                        {main.map((mark, index) => {
                          return (
                            <Marker
                              key={mark._id}
                              id={mark.CompanyName}
                              position={[mark.Latitude, mark.Longitude]}
                              eventHandlers={{
                                click: handleMarkerClick,
                              }}
                              icon={customIcon}
                            >
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
    const minimumRadius = 100;
    const dynamicRadius = minimumRadius + numMarkers * 100; 

    return dynamicRadius;
  }
}

export default Governmap;