export const getData = async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Krakow&appid=80dc12560ff86934dd0db3a90cbacf0c"
  );
  if (response.status !== 200) {
    throw new Error("Couldn't connenct");
  }
  const data = await response.json();
  return data;
};
