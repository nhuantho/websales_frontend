import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export default function() {
  return <Map
    initialViewState={{
      longitude: 105.78783292620427,
      latitude: 20.980615354331977,
      zoom: 13
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken='pk.eyJ1Ijoibmh1YW5idWkiLCJhIjoiY2wzMzRwdWh0MHE2czNka2N5enJ0bWRkMSJ9.6Hd7dSLuSbve4j3Fay_DNA'
  />;
}