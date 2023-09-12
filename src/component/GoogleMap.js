import React from "react";
import googleMapReact from "google-map-react";
import ContactUs from "./ContactUs";

function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 31.96196904411429,
      lng: 35.90761147083978,
    },
    zoom: 11,
  };
  return (
    <div style={{height:"100vh",width:'100%'}}>
      <googleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
<ContactUs
lat={31.96196904411429}
lng={35.90761147083978}
text="mymarker"
/>

      </googleMapReact>
    </div>
  );
}

export default GoogleMap;
