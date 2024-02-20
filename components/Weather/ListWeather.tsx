import { StyleSheet, View, Text } from "react-native";
import dayjs from "dayjs";
import { MotiView } from "moti";
import { useEffect, useState } from "react";

import { getWeatherIcon } from "../../helpers/getWeatherIcon";
import { getTemp } from "../../helpers/getTemp";
import { useWeatherContext } from "../hoc/WithWeather";
import { FilterType } from "../../types/general/FilterType";

interface ListWeatherProps {
  weather: any;
}

interface ListWeatherItemProps {
  item: any;
  filterType: FilterType;
}

function ListWeatherItem({ item }: ListWeatherItemProps) {
  return (
    <View style={styles.listWeatherItem}>
      <Text style={styles.listWeatherItemDay}>{item.date}</Text>

      {getWeatherIcon(item?.weather?.[0]?.id, 100)}

      <View style={styles.listWeatherItemBottom}>
        <Text style={styles.listWeatherItemTemp}>{item?.temp}°</Text>

        {item?.minTemp && (
          <Text style={styles.listWeatherItemTempMin}>{item?.minTemp}°</Text>
        )}
      </View>
    </View>
  );
}

export default function ListWeather({ weather }: ListWeatherProps) {
  const [isAnimate, setIsAnimate] = useState(true);
  const [items, setItems] = useState<any>(weather?.hourly?.slice(1, 8));

  const { filterType } = useWeatherContext();

  useEffect(() => {
    setTimeout(() => {
      const filteredItems =
        filterType === "today"
          ? weather?.hourly?.slice(1, 8)
          : weather?.daily?.slice(1, 8);
      const newItems = filteredItems.map((item: any) => ({
        ...item,
        date: dayjs(new Date(item?.dt * 1000)).format(
          filterType === "today" ? "HH:mm" : "dddd",
        ),
        temp:
          filterType === "today"
            ? getTemp(item?.temp)
            : getTemp(item?.temp?.max),
        minTemp: filterType === "week" ? getTemp(item?.temp?.min) : null,
      }));

      setItems(newItems);
    }, 1000);
  }, [filterType, weather]);

  useEffect(() => {
    setIsAnimate(true);
    setTimeout(() => {
      setIsAnimate(false);
    }, 1000);
  }, [filterType]);

  return (
    <View style={styles.listWeather}>
      {items?.map((item: any, index: number) => (
        <MotiView
          key={index}
          animate={{
            opacity: isAnimate ? 0 : 1,
            transform: isAnimate ? [{ translateY: 0 }] : [{ translateY: 10 }],
          }}
          transition={{
            type: "spring",
            delay: index * 100,
            duration: 500,
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
  listWeatherItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  listWeatherItemDay: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
    paddingBottom: 10,
  },
  listWeatherItemBottom: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  listWeatherItemTemp: {
    fontWeight: "500",
    fontSize: 16,
    fontFamily: "Rubik_500Medium",
  },
  listWeatherItemTempMin: {
    fontWeight: "500",
    fontSize: 16,
    opacity: 0.6,
    fontFamily: "Rubik_500Medium",
  },
});
