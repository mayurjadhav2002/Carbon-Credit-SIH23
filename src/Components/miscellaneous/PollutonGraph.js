import React from 'react'
import {
    MapContainer,
    TileLayer
} from 'react-leaflet'
const PollutonGraph = () => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={10} style={{width:'100vw',height:'100vh'}} scrollWheelZoom={false}>
          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=cVWyrsbwYYISvHVDxDcq"
          />
        </MapContainer>
      )
}

export default PollutonGraph