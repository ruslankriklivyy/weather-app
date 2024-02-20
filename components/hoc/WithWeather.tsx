import { createContext, ReactNode, useContext, useState } from "react";

import { DegreeType } from "../../types/general/DegreeType";
import { FilterType } from "../../types/general/FilterType";

interface WithWeatherProps {
  children: ReactNode;
}

export const WeatherContext = createContext<{
  degreeType: DegreeType;
  filterType: FilterType;
  setDegreeType: (type: DegreeType) => void;
  setFilterType: (type: FilterType) => void;
}>({
  degreeType: "C",
  filterType: "today",
  setDegreeType: () => null,
  setFilterType: () => null,
});

export const useWeatherContext = () => useContext(WeatherContext);

function WithWeather({ children }: WithWeatherProps) {
  const [degreeType, setDegreeType] = useState<DegreeType>("C");
  const [filterType, setFilterType] = useState<FilterType>("today");

  const contextValue = {
    degreeType,
    filterType,
    setDegreeType: (type: DegreeType) => {
      setDegreeType(type);
      return null;
    },
    setFilterType: (type: FilterType) => {
      setFilterType(type);
      return null;
    },
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WithWeather;
