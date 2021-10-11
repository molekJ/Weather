import { useState, useEffect } from "react";

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

export const Search = (url: string, input: string | null) => {
  const [data, setData] = useState<null | Props>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (input === null) {
      return;
    }
    const fetchData = async (url: string) => {
      const response = await fetch(url);
      if (response.status === 400 || response.status === 404) {
        return setError(true);
      }

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
  }, [input]);

  return { data, loading, error };
};
