import { Container } from "./DisplayWeatherStyled";

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

export const DisplayWeather: React.FC<Props> = (data: Props) => {
  return (
    <Container>
      <p>Nazwa: {data.name}</p>
      <p>
        Temperatura: {(Math.round((data.temp - 273.15) * 100) / 100).toFixed(1)}
      </p>
      <p>Wilgotnosc: {data.humidity}%</p>
      <p>Cisnienie: {data.pressure} hPa</p>
      <p>Predkosc wiatru: {data.windSpeed} m/s</p>
      <p>Kierunek wiatru: {data.windDirection} deg</p>
      <p>Zachmurzneie: {data.clouds} %</p>
      <p>Strefa czasowa: {data.timeZone}</p>
      <p>Szerokosc geograficzna: {data.lat}</p>
      <p>Długość geograficzna: {data.lon}</p>
      <p>Wschod slonca: {data.sunrise}</p>
      <p>Zachod slonca: {data.sunset}</p>
    </Container>
  );
};
