import styled from "styled-components";
import { getData } from "./Clients/openWeatherMap";
import { Cities } from "./Components/Cities";
import { Details } from "./Components/Details";
import { GlobalStyle } from "./GlobalStyles";
import { useState } from "react";
import { Coordinate } from "./Config/citiesInfo";

const Container = styled.div`
  display: flex;
`;

const SelectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [selectedCity, setSelectedCity] = useState<null | Coordinate>(null);

  const handleCitySelection = (coordinates: Coordinate) => {
    setSelectedCity(coordinates);
  };

  const resetCitySelection = () => {
    setSelectedCity(null);
  };

  // if (selectedCity) {
  //   getData(selectedCity.latitude, selectedCity.longitude)
  //     .then((data) => console.log("Pogoda:", data.name, data))
  //     .catch((err) => console.log("Some error:", err.message));
  // }

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        <Cities
          selectedCity={selectedCity}
          onCityClick={handleCitySelection}
        ></Cities>
        <Details selectedCity={selectedCity}></Details>
      </Container>
      <button onClick={() => resetCitySelection()}>Reset</button>
      <SelectInfo>
        <h2>Zaznaczony element:</h2>
        <p>
          {selectedCity && `Szerokość geograficzna: ${selectedCity.latitude}`}
        </p>
        <p>
          {selectedCity && `Długośc geograficzna: ${selectedCity.longitude}`}
        </p>
      </SelectInfo>
    </>
  );
}

export default App;
