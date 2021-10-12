interface Props {
  name: string;
  lat: number;
  lon: number;
  temp: number;
  pressure: number;
  timeZone: number;
}

export const CityInfo = (city: Props | null) => {
  return (
    <>
      {city?.name ? (
        <>
          <h1>Nazwa: {city.name}</h1>
          <p>szerokość geograficzna: {city.lat} </p>
          <p>długość geograficzna: {city.lon}</p>
          <p>
            Temperatura:{" "}
            {(Math.round((city.temp - 273.15) * 100) / 100).toFixed(1)}
          </p>
          <p>Ciśnienie: {city.pressure}</p>
          <p>Strefa czasowa: {city.timeZone}</p>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};
