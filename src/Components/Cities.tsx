import { citiesInfo } from "../Config/citiesInfo";

export function Cities() {
  return (
    <div>
      <h2>Miasta:</h2>
      <ul>
        {citiesInfo.map((city) => {
          return <li key={city.coordinates.latitude}>{city.name}</li>;
        })}
      </ul>
    </div>
  );
}
