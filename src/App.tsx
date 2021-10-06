import styled from "styled-components";
import { Cities } from "./Components/Cities";

import { GlobalStyle } from "./GlobalStyles";
import { useState } from "react";
import { Coordinate } from "./Config/citiesInfo";
import { OpenWeather } from "./Clients/openWeather";
import { SearchCity } from "./Components/SearchCity";
import { Navbar } from "./Components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

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

  return (
    <>
      <Router>
        <GlobalStyle></GlobalStyle>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Container>
              <Cities
                selectedCity={selectedCity}
                onCityClick={handleCitySelection}
              ></Cities>
            </Container>

            <SelectInfo>
              <h2>Zaznaczony element:</h2>

              {loading ? (
                <div>...loading</div>
              ) : (
                <div>
                  <p>Szerokość geograficzna: {data.lat}</p>
                  <p>Długośc geograficzna: {data.lon}</p>
                  <p>Nazwa: {data.name}</p>
                  <p>
                    Temperatura:{" "}
                    {(Math.round((data.temp - 273.15) * 100) / 100).toFixed(1)}
                  </p>
                  <p>Ciśnienie: {data.pressure}</p>
                  <p>Strefa czasowa: {data.timeZone}</p>
                </div>
              )}
            </SelectInfo>
          </Route>
          <Route path="/search">
            <SearchCity></SearchCity>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
