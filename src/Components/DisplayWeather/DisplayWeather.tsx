import {
  Container,
  DisplayValue,
  Header,
  InsideMainInfo,
  MainInfo,
  Temp,
} from "./DisplayWeatherStyled";

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
  const changeTime = (time: number) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();

    const formatedTime = `${hours}: ${minutes.substr(-2)} : ${seconds.substr(
      -2
    )}`;

    return formatedTime;
  };

  const sunriseTime = changeTime(data.sunrise);
  const sunsetTime = changeTime(data.sunset);
  return (
    <Container>
      <Header>
        <p>{data.name}</p>
        <DisplayValue>
          <p>Wschod</p>
          <p>{sunriseTime}</p>
        </DisplayValue>
        <DisplayValue>
          <p>Zachod</p>
          <p>{sunsetTime}</p>
        </DisplayValue>
      </Header>
      <MainInfo>
        <Temp>
          {(Math.round((data.temp - 273.15) * 100) / 100).toFixed(1)}&#8451;
        </Temp>
        <InsideMainInfo>
          <DisplayValue>
            <p>Wilgotnosc</p>
            <p> {data.humidity}%</p>
          </DisplayValue>
          <DisplayValue>
            <p>Predkosc wiatru</p>
            <p> {data.windSpeed} m/s</p>
          </DisplayValue>
        </InsideMainInfo>
        <InsideMainInfo>
          <DisplayValue>
            <p>Cisnienie</p>
            <p>{data.pressure} hPa</p>
          </DisplayValue>
          <DisplayValue>
            <p>Zachmurzneie</p>
            <p>{data.clouds} %</p>
          </DisplayValue>
        </InsideMainInfo>
      </MainInfo>
      {/* <p>Kierunek wiatru: {data.windDirection} deg</p> */}
      {/* <p>Strefa czasowa: {data.timeZone}</p>
      <p>Szerokosc geograficzna: {data.lat}</p>
      <p>Długość geograficzna: {data.lon}</p> */}
    </Container>
  );
};
