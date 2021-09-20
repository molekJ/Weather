import { Coordinate } from "../Config/citiesInfo";
import { useState, useEffect } from "react";

interface Props {
  selectedCity: Coordinate | null;
}

export const Details: React.FC<Props> = ({ selectedCity }) => {
  const [cityData, setCityData] = useState<null | object>(null);

  useEffect(() => {
    setCityData([]);

    if (selectedCity === null) {
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.latitude}&lon=${selectedCity.longitude}&appid=80dc12560ff86934dd0db3a90cbacf0c`
    )
      .then((respone) => respone.json())
      .then((data) => {
        setCityData(data.cityData);
      });
  }, [selectedCity]);

  return (
    <>
      <h2>Szczegóły pogody:</h2>
      <p>Nazwa miasta</p>
      <p>Miasto: {cityData && cityData}</p>
    </>
  );
};
