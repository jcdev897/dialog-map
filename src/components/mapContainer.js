import React, { useState, useEffect, useRef, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import geojson from "./geojson.json"
import './../scss/mapcontainer.css';

mapboxgl.accessToken =
  "pk.eyJ1Ijoid3RnZW9ncmFwaGVyIiwiYSI6ImNrNXk3dXh6NzAwbncza3A1eHlpY2J2bmoifQ.JRy79QqtwUTYHK7dFUYy5g";

function MapContainer(props) {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  // Initialize map when component mounts
  useEffect(() => {
    if(map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/dark-v10",
      center: [-95.3676974, 29.7589382],
      zoom: 1,
      attributionControl: false
    });
    
    map.current.on("load", () => {
      map.current.addSource('map-data', {
        type: 'geojson',
        data: geojson
      });
      map.current.addLayer({
        type: 'line',
        source: 'map-data',
        id: 'line',
        paint: {
          'line-color': props.lineColor,
          'line-width': parseInt(props.lineWidth)
        },
        'filter': ['==', '$type', 'LineString']
      });

      map.current.addLayer({
        type: 'circle',
        source: 'map-data',
        id: 'circle',
        paint: {
          'circle-opacity': 0.8,
          'circle-color': props.pointColor,
          'circle-radius': parseInt(props.pointRadius)
        },
        'filter': ['==', '$type', 'Point']
      });

      map.current.addLayer({
        type: "symbol",
        source: "map-data",
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
      });
    });
    map.current.fitBounds(
      [
        [-122.674194, 45.5202471],
        [-80.19362, 25.7741728]
      ],
      {
        padding: {top: 10, bottom:25, left: 100, right: 300}
      }
    );
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
}

export default MapContainer;