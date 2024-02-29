import { StyleSheet, Text, View } from "react-native";

import { getWeatherIcon } from "../../helpers/getWeatherIcon";
import { FilterType } from "../../types/general/FilterType";
import { CustomWeatherData } from "../../types/entities/CustomWeatherData";
import { useWeatherContext } from "../hoc/WithWeather";
import { getTemp } from "../../helpers/getTemp";

interface ListWeatherItemProps {
  item: CustomWeatherData;
  filterType: FilterType;
}

export default function ListWeatherItem({ item }: ListWeatherItemProps) {
  const { degreeType } = useWeatherContext();

  return (
    <View style={styles.listWeatherItem}>
      <Text style={styles.listWeatherItemDay}>{item.date}</Text>

      {getWeatherIcon(item?.weather?.[0]?.id, 100)}

      <View style={styles.listWeatherItemBottom}>
        <Text style={styles.listWeatherItemTemp}>
          {getTemp(item?.temp, degreeType)}°
        </Text>

        {typeof item?.minTemp === "number" && (
          <Text style={styles.listWeatherItemTempMin}>
            {getTemp(item?.minTemp, degreeType)}°
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
