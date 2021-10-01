import { useState, useEffect } from "react";
import { Coordinate } from "../Config/citiesInfo";

export const OpenWeatherSearch = (name: string) => {
  const [data, setData] = useState<boolean | any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (name: string) => {
      const response = await fetch(
        `api.openweathermap.org/data/2.5/weather?q=${name}&appid=80dc12560ff86934dd0db3a90cbacf0c`
      );
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
    fetchData(name);
  }, []);

  return { data, loading };
};
