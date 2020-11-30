import './Map.css';
import React, { Component } from 'react';
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'; 

var greenIcon = L.icon({
    iconUrl: 'leaf-green.png',
    shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

class Map extends Component {
  state = {
    lat: 53.551086,
    lng: 9.993682,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng];

return (
  <MapContainer className="map" center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Fischbeker Heide <br /> Plan your woodventure!.
      </Popup>
    </Marker>
  </MapContainer>
  )
  }
}

export default Map;