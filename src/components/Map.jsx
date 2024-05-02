import React from 'react';
import Map, {Marker} from 'react-map-gl';
import mapLogo from '../assets/images/mapLogo.png';

const MapContainer = () => {
    return ( 
        <section class="map" id="map" style={{
            "height" : "600px" 
        }}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiZXhybGFuZGluZ3MiLCJhIjoiY2x2Ym1paXF4MDRqNzJrbGhldDdzbzY2ZiJ9._NRv4-LW-AwL86_e3jKrLg"
            mapLib={import('mapbox-gl')}
            initialViewState={{
              longitude: -73.9546035,
              latitude: 40.6144579,
              zoom: 14
            }}
            mapStyle="mapbox://styles/exrlandings/clvn3srf1003l01pfcy7j0c4p"
          >
            <Marker longitude="-73.9546035" latitude="40.6144579" anchor="bottom">
              <img src={mapLogo} alt="" />
            </Marker>  
          </Map>;
        </section>
     );
}
 
export default MapContainer;