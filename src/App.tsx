import styled from "styled-components";
import { Cities } from "./Components/Cities";
import { Details } from "./Components/Details";
import { GlobalStyle } from "./GlobalStyles";
import { useState, useEffect } from "react";
import { Coordinate } from "./Config/citiesInfo";
import { OpenWeather } from "./Clients/openWeather";

const Container = styled.div`
  display: flex;
`;

const SelectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [selectedCity, setSelectedCity] = useState<Coordinate | null>(null);

  const handleCitySelection = (coordinates: Coordinate) => {
    setSelectedCity(coordinates);
  };

  const { data, loading } = OpenWeather(
    `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity?.latitude}&lon=${selectedCity?.longitude}&appid=80dc12560ff86934dd0db3a90cbacf0c`,
    selectedCity
  );

  console.log(data);
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

      <SelectInfo>
        <h2>Zaznaczony element:</h2>
        <p>
          {selectedCity && `Szerokość geograficzna: ${selectedCity.latitude}`}
        </p>
        <p>
          {selectedCity && `Długośc geograficzna: ${selectedCity.longitude}`}
        </p>
        {loading ? (
          <div>...loading</div>
        ) : (
          <div>
            <p>Nazwa: {data.name}</p>
            <p>
              Temperatura:{" "}
              {(Math.round((data.main.temp - 273.15) * 100) / 100).toFixed(1)}
            </p>
            <p>Ciśnienie: {data.main.pressure}</p>
          </div>
        )}
      </SelectInfo>
    </>
  );
}

export default App;
