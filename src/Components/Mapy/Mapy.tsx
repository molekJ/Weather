import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Poiner = styled.div`
  position: relative;
  left: -10px;
  top: -20px;
  border-radius: 50% 50% 50% 0;
  border: 4px solid #ea4335;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
`;

const AnyReactComponent = ({ text }: { text: any }) => <div>{text}</div>;
interface Props {
  center: {
    lat: number;
    lng: number;
  };
}

export const SimpleMap = ({ center }: Props) => {
  return (
    <div style={{ height: "400px", width: "1000px", margin: "auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAhMNDTEq8ATGg9-mmj7yVxhB4Pb6TInaY" }}
        defaultCenter={center}
        defaultZoom={7}
      >
        {/* <Poiner></Poiner> */}
        {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};
