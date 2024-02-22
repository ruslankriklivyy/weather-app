import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { DegreeType } from "../../types/general/DegreeType";
import { FilterType } from "../../types/general/FilterType";

interface WithWeatherProps {
  children: ReactNode;
}

export const DEGREE_TYPE_STORAGE_KEY = "degree_type";

export const WeatherContext = createContext<{
  degreeType: DegreeType;
  filterType: FilterType;
  isAnimate: boolean;
  setIsAnimate: (isAnimate: boolean) => void;
  setDegreeType: (type: DegreeType) => void;
  setFilterType: (type: FilterType) => void;
}>({
  degreeType: "C",
  filterType: "today",
  isAnimate: true,
  setIsAnimate: () => null,
  setDegreeType: () => null,
  setFilterType: () => null,
});

export const useWeatherContext = () => useContext(WeatherContext);

function WithWeather({ children }: WithWeatherProps) {
  const [isAnimate, setIsAnimate] = useState<boolean>(true);
  const [degreeType, setDegreeType] = useState<DegreeType>("C");
  const [filterType, setFilterType] = useState<FilterType>("today");

  const contextValue = {
    degreeType,
    filterType,
    isAnimate,
    setIsAnimate: (isAnimate: boolean) => {
      setIsAnimate(isAnimate);
      return null;
    },
    setDegreeType: async (type: DegreeType) => {
      await AsyncStorage.setItem(DEGREE_TYPE_STORAGE_KEY, type);
      setDegreeType(type);
      return null;
    },
    setFilterType: (type: FilterType) => {
      setFilterType(type);
      return null;
    },
  };

  const initDegreeType = async () => {
    try {
      const degreeTypeFromStorage = await AsyncStorage.getItem(
        DEGREE_TYPE_STORAGE_KEY,
      );

      if (degreeTypeFromStorage) {
        setDegreeType(degreeTypeFromStorage as DegreeType);
      } else {
        await AsyncStorage.setItem(DEGREE_TYPE_STORAGE_KEY, "C");
        setDegreeType("C");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    initDegreeType();
  }, []);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WithWeather;
