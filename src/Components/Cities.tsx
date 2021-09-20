import { citiesInfo, Coordinate } from "../Config/citiesInfo";

interface Props {
  selectedCity: Coordinate | null;
  onCityClick: (coordinates: Coordinate) => void;
}

export const Cities: React.FC<Props> = ({ onCityClick, selectedCity }) => {
  return (
    <div>
      <h2>Miasta:</h2>
      <ul>
        {citiesInfo.map((city) => {
          return (
            <li
              key={city.coordinates.latitude}
              onClick={() => {
                onCityClick(city.coordinates);
              }}
            >
              {" "}
              {city.coordinates === selectedCity ? (
                <strong>{city.name}</strong>
              ) : (
                city.name
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
