import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";

import { UserLocation } from "../../types/entities/UserLocation";

interface WithCurrentLocationProps {
  children: ReactNode;
}

export const USER_COORDS_STORAGE_KEY = "user_coords";

export const CurrentLocationContext = createContext<{
  location: UserLocation | null;
  setLocation: (location: UserLocation) => null;
}>({
  location: null,
  setLocation: () => null,
});

export const useCurrentLocationContext = () =>
  useContext(CurrentLocationContext);

function WithCurrentLocation({ children }: WithCurrentLocationProps) {
  const [location, setLocation] = useState<UserLocation | null>(null);

  const onChangeLocation = async (userLocation: UserLocation) => {
    setLocation(userLocation);
    await AsyncStorage.setItem(
      USER_COORDS_STORAGE_KEY,
      JSON.stringify(userLocation),
    );
  };

  const contextValue = {
    location,
    setLocation: (newLocation: UserLocation) => {
      onChangeLocation(newLocation);
      return null;
    },
  };

  const getCurrentLocation = async () => {
    try {
      const userLocationFromStorage = await AsyncStorage.getItem(
        USER_COORDS_STORAGE_KEY,
      );

      if (userLocationFromStorage && JSON.parse(userLocationFromStorage)) {
        setLocation(JSON.parse(userLocationFromStorage));
        return;
      }

      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Highest,
      });
      const reversedGeocode = await Location.reverseGeocodeAsync({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      });
      const userLocation = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        cityName: reversedGeocode[0].city || "",
        isoCountryCode: reversedGeocode[0].isoCountryCode || "",
      };

      await AsyncStorage.setItem(
        USER_COORDS_STORAGE_KEY,
        JSON.stringify(userLocation),
      );
      setLocation(userLocation);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <CurrentLocationContext.Provider value={contextValue}>
      {children}
    </CurrentLocationContext.Provider>
  );
}

export default WithCurrentLocation;
