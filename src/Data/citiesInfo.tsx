export interface Coordinate {
  latitude: string;
  longitude: string;
}

export interface City {
  name: string;
  coordinates: Coordinate;
}

export const citiesInfo: City[] = [
  {
    name: "Biała Podlaska",
    coordinates: {
      latitude: "52.0323800",
      longitude: "23.1165200",
    },
  },
  {
    name: "Bydgoszcz",
    coordinates: {
      latitude: "53.1235000",
      longitude: "18.0076200",
    },
  },
  {
    name: "Toruń",
    coordinates: {
      latitude: "53.0137500",
      longitude: "18.5981400",
    },
  },
  {
    name: "Warszawa",
    coordinates: {
      latitude: "52.2319581",
      longitude: "21.0067249",
    },
  },
  {
    name: "Zielona Góra",
    coordinates: {
      latitude: "51.9354800",
      longitude: "15.5064300",
    },
  },
  {
    name: "Szczecin",
    coordinates: {
      latitude: "53.4301818",
      longitude: "14.5509623",
    },
  },
  {
    name: "Wrocław",
    coordinates: {
      latitude: "51.1263106",
      longitude: "16.9781963",
    },
  },
  {
    name: "Łódź",
    coordinates: {
      latitude: "51.7500000",
      longitude: "19.4666700",
    },
  },
  {
    name: "Rzeszów",
    coordinates: {
      latitude: "50.0413200",
      longitude: "21.9990100",
    },
  },
  {
    name: "Gdańsk",
    coordinates: {
      latitude: "54.3520500",
      longitude: "18.6463700",
    },
  },
  {
    name: "Katowice",
    coordinates: {
      latitude: "50.2584100",
      longitude: "19.0275400",
    },
  },
];
