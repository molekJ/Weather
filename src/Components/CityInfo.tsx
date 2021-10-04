import styled from "styled-components";

interface Props {
  name: string;
  lat: number;
  lon: number;
  temp: number;
  pressure: number;
  timeZone: number;
}

export const CityInfo = (city: Props | null) => {
  return (
    <>
      <h1>Nazwa: {city?.name}</h1>
      <p>szerokość geograficzna: {city?.lat} </p>
      <p>długość geograficzna: {city?.lon}</p>
      <p>Tempreraatura: {city?.temp}</p>
      <p>Ciśnienie: {city?.pressure}</p>
      <p>Strefa czasowa: {city?.timeZone}</p>
    </>
  );
};
