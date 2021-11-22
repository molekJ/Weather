import styled from "styled-components";
import { Cities } from "./Components/Cities";
import { GlobalStyle } from "./GlobalStyles";
import { useState } from "react";
import { Coordinate } from "./Data/citiesInfo";
import { OpenWeather } from "./Clients/openWeather";
import { SearchCity } from "./pages/SearchCity";
import { Navbar } from "./Components/Navbar";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { DisplayWeather } from "./Components/DisplayWeather/DisplayWeather";
import { SimpleMap } from "./Components/Mapy/Mapy";

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

              {loading ? <div>...loading</div> : <p>Elo</p>}
              {data && (
                <>
                  <DisplayWeather
                    name={data?.name}
                    temp={data?.temp}
                    humidity={data?.humidity}
                    pressure={data?.pressure}
                    windSpeed={data?.windSpeed}
                    windDirection={data?.windDirection}
                    clouds={data?.clouds}
                    timeZone={data?.timeZone}
                    lat={data?.lat}
                    lon={data?.lon}
                    sunrise={data?.sunrise}
                    sunset={data?.sunset}
                  />
                  <SimpleMap
                    center={{ lat: data.lat, lng: data.lon }}
                  ></SimpleMap>
                </>
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
