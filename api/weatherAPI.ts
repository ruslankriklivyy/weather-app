import axios from "axios";
import { OPEN_WEATHER_API_KEY } from "@env";
import { WeatherData } from "../types/entities/WeatherData";

interface FetchCurrentWeatherArgs {
  lat: number;
  lon: number;
}

export const weatherAPI = {
  async fetchCurrentWeather({ lon, lat }: FetchCurrentWeatherArgs) {
    const { data } = await axios.get<WeatherData>(
      `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_API_KEY}&lat=${lat}&lon=${lon}`,
    );
    return data;
  },
};
