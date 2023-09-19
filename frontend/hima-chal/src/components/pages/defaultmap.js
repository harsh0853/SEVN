import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = () => {
  
  const mapStyles = {        
    height: "100%",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBwswtGSMZBRrNaFtl8nfzy2W85oXGT1go'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;