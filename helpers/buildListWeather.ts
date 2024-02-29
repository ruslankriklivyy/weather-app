import dayjs from "dayjs";

import { FilterType } from "../types/general/FilterType";
import { getTemp } from "./getTemp";
import { DegreeType } from "../types/general/DegreeType";
import {
  WeatherDaily,
  WeatherData,
  WeatherHourly,
} from "../types/entities/WeatherData";
import { CustomWeatherData } from "../types/entities/CustomWeatherData";

interface BuildListWeatherArgs {
  weather: WeatherData;
  filterType: FilterType;
}

export default function buildListWeather({
  weather,
  filterType,
}: BuildListWeatherArgs): CustomWeatherData[] {
  const filteredItems =
    filterType === "today"
      ? weather?.hourly?.slice(1, 8)
      : weather?.daily?.slice(1, 8);
  return filteredItems.map((item) => {
    const date = dayjs(new Date(item?.dt * 1000)).format(
      filterType === "today" ? "HH:mm" : "dddd",
    );
    const temp =
      filterType === "today"
        ? (item as WeatherHourly)?.temp
        : (item as WeatherDaily)?.temp?.max;
    const minTemp =
      filterType === "week" ? (item as WeatherDaily)?.temp?.min : null;

    return {
      ...item,
      date,
      temp,
      minTemp,
    };
  }) as unknown as CustomWeatherData[];
}
