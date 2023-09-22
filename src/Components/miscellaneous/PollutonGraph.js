import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { _WMSLayer as WMSLayer } from '@deck.gl/geo-layers';
import { ScatterplotLayer } from '@deck.gl/layers'; // Import ScatterplotLayer

const INITIAL_VIEW_STATE = {
  longitude: 77.069710,
  latitude: 28.679079,
  zoom: 9,
  pitch: 0,
  bearing: 0
};

const CONTROLLER = {
  dragRotate: false,
  touchRotate: false,
  maxPitch: 85,
  minZoom: 1,
  maxZoom: 20
};

const SAMPLE_SERVICE = {
  serviceUrl: `https://ows.terrestris.de/osm/service`,
  layers: ['OSM-WMS']
};

export default function App({
  serviceUrl = SAMPLE_SERVICE.serviceUrl,
  layers = SAMPLE_SERVICE.layers,
  initialViewState = INITIAL_VIEW_STATE,
  onMetadataLoad = console.log, // eslint-disable-line
  onMetadataLoadError = console.error // eslint-disable-line
}) {
  const [selection, setSelection] = useState(null);

  const layer = new WMSLayer({
    data: serviceUrl,
    layers,
    pickable: true,
    onMetadataLoad,
    onMetadataLoadError,
    onClick: async ({ bitmap }) => {
      if (bitmap) {
        const x = bitmap.pixel[0];
        const y = bitmap.pixel[1];
        const featureInfo = await layer.getFeatureInfoText(x, y);
        setSelection({ x, y, featureInfo });
      }
    }
  });

  // Define your heatmap or circles layer here
//   const heatmapLayer = new ScatterplotLayer({
    
//     id: 'heatmap-layer',
//     data: [
//       {
//         position: [/* Latitude */, /* Longitude */28.679079, 77.069710],
//         color: [255, 0, 0], // Red color
//         opacity: 128, // Opacity (0-255), 128 for 50% opacity
//         radius: 10000 // Adjust the radius as needed
//       }
//       // Add more data points for additional circles or heatmap points
//     ],
//     pickable: true,
//     radiusScale: 10
//   });
const data2 = 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/screen-grid/uber-pickup-locations.json'

const heatmapLayer = new ScatterplotLayer({
      data2,
      id: 'heatmp-layer',
      pickable: false,
      getPosition: d => [d[0], d[1]],
      getWeight: d => d[2],
      intensity: 1,
  threshold: 0.03,
  radiusPixels: 30,
    })
  return (
    <>
      <DeckGL layers={[layer, heatmapLayer]} initialViewState={initialViewState} controller={CONTROLLER} />
      {selection && (
        <div
          className="selected-feature-info"
          style={{ left: selection.x, top: selection.y }}
          onPointerLeave={() => setSelection(null)}
        >
          {selection.featureInfo}
        </div>
      )}
    </>
  );
}
