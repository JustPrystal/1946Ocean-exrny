import React, { useRef, useEffect, useState } from 'react';
import Map from 'react-map-gl';
import mapLogo from '../assets/images/mapLogo.png';

const MapContainer = () => {
    // const map = useRef();
    // const popupRef = useRef();
    // const onMapPopupRef = useRef();
    // const mapNode = useRef(null);



    // useEffect(()=>{
    //     const node = mapNode.current;
    //     const center = [-73.9546035, 40.6144579]
    //     const geojson = {
    //           'type': 'FeatureCollection',
    //           'features': [
    //             {
    //               'type': 'Feature',
    //               'geometry': {
    //                 'type': 'Point',
    //                 'coordinates': center
    //               }
    //             }
    //           ]
    //     }
    //     if (typeof window === "undefined" || node === null) return;
    //     map.current = new mapboxgl.Map({
    //         container: node,
    //         accessToken: "pk.eyJ1IjoiZXhybGFuZGluZ3MiLCJhIjoiY2x2Ym1paXF4MDRqNzJrbGhldDdzbzY2ZiJ9._NRv4-LW-AwL86_e3jKrLg",
    //         style: "mapbox://styles/exrlandings/clvn3srf1003l01pfcy7j0c4p",
    //         center: center,
    //         zoom: 13,
    //     });
    //     const mapboxMap = map.current;
    //     mapboxMap.on("load",() => {
    //         mapboxMap.loadImage(
    //             mapLogo,
    //             (error, image) => {
    //                 if (error) throw error;

    //                 mapboxMap.addImage('map_icon', image);
                    
    //                 mapboxMap.addSource('point', geojson);

    //                 mapboxMap.addLayer({
    //                     'id': 'points',
    //                     'type': 'symbol',
    //                     'source': 'point', // reference the data source
    //                     'layout': {
    //                       'icon-image': 'map_icon', // reference the image
    //                       'icon-size': 0.4
    //                     }
    //                   });
    //             }
    //         )
    //     })
        
    // },[])

    return ( 
        <section class="map" id="map" style={{
            "height" : "600px" 
        }}>
          <Map
            mapboxAccessToken="pk.eyJ1IjoiZXhybGFuZGluZ3MiLCJhIjoiY2x2Ym1paXF4MDRqNzJrbGhldDdzbzY2ZiJ9._NRv4-LW-AwL86_e3jKrLg"
            mapLib={import('mapbox-gl')}
            initialViewState={{
              longitude: -100,
              latitude: 40,
              zoom: 3.5
            }}
            style={{width: 600, height: 400}}
            mapStyle="mapbox://styles/exrlandings/clvn3srf1003l01pfcy7j0c4p"
          />;
            {/* <iframe width='100%' height='400px' src="https://api.mapbox.com/styles/v1/exrlandings/clvmznvku01kj01oc3sd48f87.html?title=false&access_token=pk.eyJ1IjoiZXhybGFuZGluZ3MiLCJhIjoiY2x2Ym1paXF4MDRqNzJrbGhldDdzbzY2ZiJ9._NRv4-LW-AwL86_e3jKrLg&zoomwheel=false#2.07/21.65/9.3" title="1946Ocean" style={{"border" : "none", "marginBottom" : "-5px"}}></iframe> */}
        </section>
     );
}
 
export default MapContainer;