import axios from "axios";
import { OPEN_WEATHER_API_KEY } from "@env";

interface FetchCurrentWeatherArgs {
  lat: number;
  lon: number;
}

export const weatherAPI = {
  async fetchCurrentWeather({ lon, lat }: FetchCurrentWeatherArgs) {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_API_KEY}&lat=${lat}&lon=${lon}`,
    );
    return data;
  },
};
