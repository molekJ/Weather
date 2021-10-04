import { useState } from "react";
import { CityInfo } from "./CityInfo";

interface Props {
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    pressure: number;
  };
  timezone: number;
}

export const SearchCity = () => {
  const [input, setInput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [cityInfo, setCityInfo] = useState<Props>({
    name: "",
    coord: {
      lat: 0,
      lon: 0,
    },
    main: {
      pressure: 0,
      temp: 0,
    },
    timezone: 0,
  });

  const searchCity = (name: string) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=80dc12560ff86934dd0db3a90cbacf0c`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        setError(null);
        return response;
      })
      .then((respone) => respone.json())
      .then((data) => setCityInfo(data))
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });

    console.log("Informacje o miescie przechowywane w stanie :", cityInfo);
    // console.log("Error przechowywany w stanie:", error);
  };
  return (
    <>
      <h1>Szukaj </h1>
      <div>
        <label htmlFor="city-name">Podaj nazwę miejscowości: </label>
        <form>
          <input
            id="city-name"
            name="city-name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setInput(e.target.value);
            }}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              searchCity(input);
            }}
          >
            Szukaj
          </button>
          <p>{input}</p>
          <CityInfo
            name={cityInfo.name}
            lat={cityInfo.coord.lat}
            lon={cityInfo.coord.lon}
            temp={cityInfo.main.temp}
            pressure={cityInfo.main.pressure}
            timeZone={cityInfo.timezone}
          />
        </form>
      </div>
    </>
  );
};
