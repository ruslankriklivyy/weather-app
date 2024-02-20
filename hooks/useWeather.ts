import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { weatherAPI } from "../api/weatherAPI";
import {
  useCurrentLocationContext,
  USER_COORDS_STORAGE_KEY,
} from "../components/hoc/WithCurrentLocation";

export default function useWeather() {
  const [isLoading, setIsLoading] = useState(true);
  const [weather, setWeather] = useState<any>(null);

  const { location } = useCurrentLocationContext();

  const getWeather = async () => {
    setIsLoading(true);

    try {
      const location = await AsyncStorage.getItem(USER_COORDS_STORAGE_KEY);

      if (!location) return new Error("Location is empty");

      const locationJSON = JSON.parse(location);
      const weatherFromApi = await weatherAPI.fetchCurrentWeather({
        lon: locationJSON.longitude,
        lat: locationJSON.latitude,
      });

      console.log("weatherFromApi", weatherFromApi);

      setWeather(weatherFromApi);
    } catch (error) {
      console.log("here", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (location) {
      getWeather();
    }
  }, [location]);

  return {
    weather,
    isLoading,
  };
}
