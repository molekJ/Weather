export const getData = async (lat: string, lon: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=80dc12560ff86934dd0db3a90cbacf0c`
  );
  if (response.status !== 200) {
    throw new Error("Couldn't connenct");
  }
  const data = await response.json();
  return data;
};

interface Weather {
  description: string;
}

interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

interface Wind {
  deg: number;
  speed: number;
}

interface City {
  name: string;
  sys: Sys;
  weather: Weather;
  wind: Wind;
}

export class OpenWeather {}
// constructor(latitude: string, longitude: string) {
//   this.latitude = latitude;
//   this.longitude = longitude;
// }

// import axios, { AxiosInstance } from "axios";

// interface Movie {
//   id: string;
//   rank: string;
//   title: string;
//   fullTitle: string;
//   year: string;
//   image: string;
//   crew: string;
// }

// class Backend {
//   client: AxiosInstance;

//   constructor(private url: string, private key: string) {
//     this.client = axios.create({
//       baseURL: this.url
//     });
//   }

//   getTop250Movies(): Promise<Movie[]> {
//     return new Promise((resolve, reject) => {
//       this.client
//         .get(`/API/Top250Movies/${this.key}`)
//         .then((res) => resolve(res.data?.items || []))
//         .catch((err) => reject(err));
//     });
//   }

//   createMovie(movieData: Partial<Movie>): Promise<Movie> {
//     return new Promise((resolve, reject) => {
//       this.client
//         .post(`/API/Movies/${this.key}`, movieData)
//         .then((res) => resolve(res.data))
//         .catch((err) => reject(err));
//     });
//   }
// }

// export default new Backend("https://imdb-api.com/", "k_r28mtkag");
