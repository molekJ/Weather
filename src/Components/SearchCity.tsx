import { useState } from "react";

export const SearchCity = () => {
  const [input, setInput] = useState<number | string>("");
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
            }}
          >
            Szukaj
          </button>
          <p>{input}</p>
        </form>
      </div>
    </>
  );
};
