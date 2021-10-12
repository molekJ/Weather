import { useState, useEffect } from "react";
import { Coordinate } from "../Data/citiesInfo";

interface Props {
  name: string;
  temp: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: number;
  clouds: number;
  timeZone: number;
  lat: number;
  lon: number;
  sunrise: number;
  sunset: number;
}

export const OpenWeather = (url: string, selectedCity: Coordinate | null) => {
  const [data, setData] = useState<null | Props>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCity === null) {
      return;
    }
    const fetchData = async (url: string) => {
      const response = await fetch(url);
      const dataFetch = await response.json();
      const cityInfo = {
        name: dataFetch.name as string,
        temp: dataFetch.main.temp as number,
        humidity: dataFetch.main.humidity as number,
        pressure: dataFetch.main.pressure as number,
        windSpeed: dataFetch.wind.speed as number,
        windDirection: dataFetch.wind.deg as number,
        clouds: dataFetch.clouds.all as number,
        timeZone: dataFetch.timezone as number,
        lat: dataFetch.coord.lat as number,
        lon: dataFetch.coord.lon as number,
        sunrise: dataFetch.sys.sunrise as number,
        sunset: dataFetch.sys.sunset as number,
      };
      setData({ ...cityInfo });
      setLoading(false);
    };
    fetchData(url);
  }, [selectedCity]);

  return { data, loading };
};
