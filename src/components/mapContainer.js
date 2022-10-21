import React, { useState, useCallback } from "react";
import Map, {Source, Layer} from 'react-map-gl';
import { Modal } from 'react-bootstrap';
import geojson from "./geojson.json"
import 'mapbox-gl/dist/mapbox-gl.css';
import './../scss/mapcontainer.css';

const accessToken =
  "pk.eyJ1Ijoid3RnZW9ncmFwaGVyIiwiYSI6ImNrNXk3dXh6NzAwbncza3A1eHlpY2J2bmoifQ.JRy79QqtwUTYHK7dFUYy5g";

function MapContainer(props) {
  const [viewState, setViewState] = React.useState({
    longitude: -95.3676974,
    latitude: 29.7589382,
    zoom: 3,
    attributionControl: false
  });
  const [hoverInfo, setHoverInfo] = useState(null);
  const lineStyle = {
    type: 'line',
    id: 'line',
    paint: {
      'line-color': props.lineColor,
      'line-width': parseInt(props.lineWidth)
    },
    'filter': ['==', '$type', 'LineString']
  };
  const circleStyle = {
    type: 'circle',
    id: 'circle',
    paint: {
      'circle-opacity': 0.8,
      'circle-color': props.pointColor,
      'circle-radius': parseInt(props.pointRadius)
    },
    'filter': ['==', '$type', 'Point']
  };
  const symbolStyle = {
    type: "symbol",
    id: "symbol",
    paint: {
      'text-color': "yellow"
    },
    layout: {
      "text-field": "{title}",
      "text-anchor": "top-left",
      "text-size": 18
    },
    'filter': ['==', '$type', 'Point']
  };
  const onHover = useCallback(event => {
    const {
      features,
      point: {x, y}
    } = event;
    const hoveredFeature = features && features[0];
    console.log(hoveredFeature)
    // prettier-ignore
    setHoverInfo(hoveredFeature && {feature: hoveredFeature, x, y});
    console.log(x)
  }, []);

  return (
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxAccessToken={accessToken}
        interactiveLayerIds={['line']}
        onMouseMove={onHover}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...lineStyle} />
          <Layer {...circleStyle} />
          <Layer {...symbolStyle} />
        </Source>
        {hoverInfo && (
          <Modal.Dialog className="popup-box" style={{left: hoverInfo.x, top: hoverInfo.y}}>
            <Modal.Header className="pb-0 border-bottom-0" closeButton>
              <Modal.Title className="popup-title">Route</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Route ID</label>
              <p className="mb-2">125111</p>
              <label>Route Leg</label>
              <p className="mb-2">2</p>
              <label>Origin ID</label>
              <p className="mb-2">{hoverInfo.feature.properties.originId}</p>
              <label>Origin ID.1</label>
              <p className="mb-2">{hoverInfo.feature.properties.originId}</p>
              <label>Origin Latitude</label>
              <p className="mb-2">{hoverInfo.feature.geometry.coordinates[0][1]}</p>
              <label>Origin Longtitude</label>
              <p className="mb-2">{hoverInfo.feature.geometry.coordinates[0][0]}</p>
              <label>Destination ID</label>
              <p className="mb-2">{hoverInfo.feature.properties.destId}</p>
              <label>Destination Latitude</label>
              <p className="mb-2">{hoverInfo.feature.geometry.coordinates[1][1]}</p>
              <label>Destination Longtitude</label>
              <p className="mb-2">{hoverInfo.feature.geometry.coordinates[1][0]}</p>
            </Modal.Body>
          </Modal.Dialog>
        )}
      </Map>
  );
}

export default MapContainer;