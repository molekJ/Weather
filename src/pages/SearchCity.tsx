import { useState } from "react";
import { Search } from "../Clients/search";
import { DisplayWeather } from "../Components/DisplayWeather/DisplayWeather";
import { Form } from "../Components/Form/Form";
import { SimpleMap } from "../Components/Mapy/Mapy";

export const SearchCity = () => {
  const [input, setInput] = useState<string>("");
  const [input2, setInput2] = useState<string | null>(null);

  const { data, loading, error } = Search(
    `https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=80dc12560ff86934dd0db3a90cbacf0c`,
    input2
  );

  return (
    <>
      <Form setInput={setInput} setInput2={setInput2} input={input} />

      {error && <p>Nieprawidłowa nazwa</p>}
      {data && (
        <DisplayWeather
          name={data.name}
          temp={data.temp}
          humidity={data.humidity}
          pressure={data.pressure}
          windSpeed={data.windSpeed}
          windDirection={data.windDirection}
          clouds={data.clouds}
          timeZone={data.timeZone}
          lat={data.lat}
          lon={data.lon}
          sunrise={data.sunrise}
          sunset={data.sunset}
        />
      )}
      {data && (
        <SimpleMap center={{ lat: data.lat, lng: data.lon }}></SimpleMap>
      )}
    </>
  );
};
