import React, { useState, useEffect, useRef, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import geojson from "./geojson.json"
import './../scss/mapcontainer.css';

mapboxgl.accessToken =
  "pk.eyJ1Ijoid3RnZW9ncmFwaGVyIiwiYSI6ImNrNXk3dXh6NzAwbncza3A1eHlpY2J2bmoifQ.JRy79QqtwUTYHK7dFUYy5g";

function MapContainer() {
  const mapContainerRef = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-95.3676974, 29.7589382],
      zoom: 3,
    });

    map.on("load", () => {
      map.addSource('map-data', {
        type: 'geojson',
        data: geojson
      });
      map.addLayer({
        type: 'line',
        source: 'map-data',
        id: 'line',
        paint: {
          'line-color': 'blue',
          'line-width': 3
        },
        'filter': ['==', '$type', 'LineString']
      });

      map.addLayer({
        type: 'circle',
        source: 'map-data',
        id: 'circle',
        paint: {
          'circle-radius': 6,
          'circle-opacity': 1,
          'circle-stroke-width': 5,
          'circle-color': 'blue'
        },
        'filter': ['==', '$type', 'Point']
      });
    });
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
}

export default MapContainer;