import { useState, useEffect } from "react";
import { Coordinate } from "../Data/citiesInfo";

export const OpenWeather = (url: string, selectedCity: Coordinate | null) => {
  const [data, setData] = useState<boolean | any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCity === null) {
      return;
    }
    const fetchData = async (url: string) => {
      const response = await fetch(url);
      const dataFetch = await response.json();
      const cityInfo = {
        name: dataFetch.name,
        temp: dataFetch.main.temp,
        pressure: dataFetch.main.pressure,
        lat: dataFetch.coord.lat,
        lon: dataFetch.coord.lon,
        timeZone: dataFetch.timezone,
      };
      setData({ ...cityInfo });
      setLoading(false);
    };
    fetchData(url);
  }, [selectedCity]);

  return { data, loading };
};
