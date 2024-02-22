export interface WeatherData {
  current: WeatherDataCurrent;
  daily: WeatherDaily[];
  hourly: WeatherHourly[];
  lat: number;
  lon: number;
  minutely: WeatherMinutely[];
}

export interface WeatherDataCurrent {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface WeatherDaily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  sunrise: number;
  sunset: number;
  temp: { max: number; min: number };
  uvi: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface WeatherHourly {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: number;
  humidity: number;
  pop: number;
  pressure: number;
  temp: number;
  uvi: number;
  visibility: number;
  weather: Weather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}

export interface Weather {
  [key: string]: any;
}

interface WeatherMinutely {
  dt: number;
  precipitation: number;
}
