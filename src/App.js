import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="map"></div>
  <script>
  //default token
  mapboxgl.accessToken = 'pk.eyJ1IjoibW9sbHltZXJwIiwiYSI6ImNpazdqbGtiZTAxbGNocm0ybXJ3MnNzOHAifQ.5_kJrEENbBWtqTZEv7g1-w';
  
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [136.95481, 35.14274],
zoom: 13

    });
  map.on('load', function(){
  map.addLayer({
    id: "test",
    source: {
      type: "geojson",
      data: {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {},
            "geometry": {
              "type": "MultiLineString",
              "coordinates": [
                     [
                        [
                            136.95481,
                            35.14274
                        ],
                        [
                            136.95532,
                            35.14322
                        ]
                    ],
                    [
                        [
                            136.95532,
                            35.14322
                        ],
                        [
                            136.95466,
                            35.14376
                        ]
                    ],
                    [
                        [
                            136.95532,
                            35.14322
                        ],
                        [
                            136.95466,
                            35.14376
                        ]
                    ],
                    [
                        [
                            136.95466,
                            35.14376
                        ],
                        [
                            136.95394,
                            35.14434
                        ]
                    ],
                    [
                        [
                            136.95466,
                            35.14376
                        ],
                        [
                            136.95394,
                            35.14434
                        ]
                    ],
                  [
                        [
                            136.95341,
                            35.14382
                        ],
                        [
                            136.9532,
                            35.14361
                        ]
                    ],
                   
               
                ]
            }
          }
        ]
      }
    },
    type:"line"
  })
})

  </script>
    </div>
  );
}

export default App;
