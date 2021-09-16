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
      latitude: "52.033333",
      longitude: "23.116667",
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
    name: "Zakopane",
    coordinates: {
      latitude: "49.2969446",
      longitude: "19.950659",
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
];
