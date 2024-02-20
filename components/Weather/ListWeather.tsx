import { StyleSheet, View, Text, VirtualizedList } from "react-native";
import dayjs from "dayjs";

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

function ListWeatherItem({ item, filterType }: ListWeatherItemProps) {
  const itemDate = dayjs(new Date(item?.dt * 1000)).format(
    filterType === "today" ? "HH:mm" : "dddd",
  );
  const itemMaxTemp =
    filterType === "today" ? getTemp(item?.temp) : getTemp(item?.temp?.max);

  return (
    <View style={styles.listWeatherItem}>
      <Text style={styles.listWeatherItemDay}>{itemDate}</Text>

      {getWeatherIcon(item?.weather?.[0]?.id, 100)}

      <View style={styles.listWeatherItemBottom}>
        <Text style={styles.listWeatherItemTemp}>{itemMaxTemp}°</Text>

        {filterType === "week" && (
          <Text style={styles.listWeatherItemTempMin}>
            {getTemp(item?.temp?.min)}°
          </Text>
        )}
      </View>
    </View>
  );
}

export default function ListWeather({ weather }: ListWeatherProps) {
  const { filterType } = useWeatherContext();

  const hourlyWeather =
    filterType === "today"
      ? weather?.hourly?.slice(1, 8)
      : weather?.daily?.slice(1, 8);

  return (
    <VirtualizedList
      initialNumToRender={3}
      data={hourlyWeather}
      scrollEnabled={false}
      scrollToOverflowEnabled={false}
      contentContainerStyle={{
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: 10,
        flexGrow: 1,
      }}
      renderItem={({ item }) => (
        <ListWeatherItem item={item} filterType={filterType} />
      )}
      keyExtractor={(item) => Math.random().toString(12).substring(0)}
      getItemCount={() => hourlyWeather?.length}
      getItem={(data, index) => data[index]}
    />
  );
}

const styles = StyleSheet.create({
  listWeather: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
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
