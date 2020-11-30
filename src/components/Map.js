import './Map.css';
import React, { Component } from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'; 


{/*import L from 'leaflet';
  function GetIcon(_iconSize){
  return L.icon(options {
    iconUrl: require('../icons/location icons/treeicon1.png'),
    iconSize: [20]

  }
  );
*/}

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

  //Marker//

  //Marker//


  render() {
    const position = [this.state.lat, this.state.lng];

return (
  <MapContainer className="map" center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
    <TileLayer
      url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    />

    <Marker position={position}>
    <Popup></Popup>


    </Marker>
    
    {/*<Marker position={position}>
      <Popup>
        Fischbeker Heide <br /> Plan your woodventure!.
      </Popup>
    </Marker>*/}

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