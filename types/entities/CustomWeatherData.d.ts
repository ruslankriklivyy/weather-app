import { Weather, WeatherData } from "./WeatherData";

export interface CustomWeatherData extends WeatherData {
  temp: number;
  date: string;
  minTemp: number;
  weather: Weather[];
}
