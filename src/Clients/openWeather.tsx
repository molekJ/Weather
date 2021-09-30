import { useState, useEffect } from "react";
import { Coordinate } from "../Config/citiesInfo";

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
      setData(dataFetch);
      setLoading(false);
    };
    fetchData(url);
  }, [selectedCity]);

  return { data, loading };
};
