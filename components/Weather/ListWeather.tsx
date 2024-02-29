import { StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { useEffect, useState } from "react";

import { useWeatherContext } from "../hoc/WithWeather";
import ListWeatherItem from "./ListWeatherItem";
import buildListWeather from "../../helpers/buildListWeather";
import { WeatherData } from "../../types/entities/WeatherData";
import { CustomWeatherData } from "../../types/entities/CustomWeatherData";

interface ListWeatherProps {
  weather: WeatherData;
}

export default function ListWeather({ weather }: ListWeatherProps) {
  const [isAnimate, setIsAnimate] = useState(true);
  const [items, setItems] = useState<CustomWeatherData[]>([]);

  const { filterType } = useWeatherContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(buildListWeather({ weather, filterType }));
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filterType, weather]);

  useEffect(() => {
    setIsAnimate(true);

    const timer = setTimeout(() => {
      setIsAnimate(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [filterType]);

  return (
    <View style={styles.listWeather}>
      {items?.map((item, index) => (
        <MotiView
          key={index}
          animate={{
            opacity: isAnimate ? 0 : 1,
            transform: isAnimate ? [{ translateY: 0 }] : [{ translateY: 10 }],
          }}
          transition={{
            type: "spring",
            delay: index * 100,
            duration: 400,
          }}
        >
          <ListWeatherItem item={item} filterType={filterType} />
        </MotiView>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listWeather: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
    flexGrow: 1,
  },
});
