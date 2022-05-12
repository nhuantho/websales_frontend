import * as React from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Marker } from 'react-map-gl';
import marker from "./images/marker.png"

export default function() {
  return <Map
    initialViewState={{
      longitude: 105.78783292620427,
      latitude: 20.980615354331977,
      zoom: 16
    }}
    style={{width:"100%", height: "100%"}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken='pk.eyJ1Ijoibmh1YW5idWkiLCJhIjoiY2wzMzRwdWh0MHE2czNka2N5enJ0bWRkMSJ9.6Hd7dSLuSbve4j3Fay_DNA'
  >

    <Marker longitude={105.78783292620427} latitude={20.980615354331977} anchor="bottom" >
        <img src={marker} style={{width: 35, height: 45}}/>
    </Marker>
  </Map>;
}