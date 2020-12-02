import './Map.css';
import React, { Component } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'; 
import L from 'leaflet';

/*import L from 'leaflet';
  function GetIcon(_iconSize){
  return L.icon(options {
    iconUrl: require('../icons/location icons/treeicon1.png'),
    iconSize: [20]

  }
  );
*/



class Map extends Component {
  state = {
    lat: 53.551086,
    lng: 9.993682,
    zoom: 13,
  }



  //Standortabfrage//
  componentDidMount() {
      navigator.geolocation.getCurrentPosition((position)=> {
          console.log(position);
      });
  }
  //Standortabfrage//



  render() {
    const position = [this.state.lat, this.state.lng];
    const iconPerson = new L.Icon({
      iconUrl: '/icons/location-icons/treeicon2.png',
      iconAnchor: [0, 0],
      popupAnchor: [25, 0],
      iconSize: [50, 50]
    });

return (
  <MapContainer className="map" center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    />

    <Marker key="1" position={position} icon={iconPerson}>
      <Popup className="popup__styling">
        <h3>WOW</h3>
      </Popup>

    </Marker>

  </MapContainer>
  )
  }
}

export default Map;




//attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'//
      //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"//
      //url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'//
      //url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"//
      //url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"//