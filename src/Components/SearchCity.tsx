import { useState } from "react";
import { CityInfo } from "./CityInfo";
import { Search } from "../Clients/search";

export const SearchCity = () => {
  const [input, setInput] = useState<string>("");
  const [input2, setInput2] = useState<string | null>(null);

  const { data, loading } = Search(
    `https://api.openweathermap.org/data/2.5/weather?q=${input2}&appid=80dc12560ff86934dd0db3a90cbacf0c`,
    input2
  );

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
              setInput2(input);
            }}
          >
            Szukaj
          </button>
        </form>
      </div>
      {loading ? (
        <div>...</div>
      ) : (
        <div>
          <p>Miasto</p>
          <p>{data.name}</p>
          <p>{data.pressure}</p>
        </div>
      )}
    </>
  );
};
