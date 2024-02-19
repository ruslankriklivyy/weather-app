import { StyleSheet, View, Text } from "react-native";

import WindStatus from "./WindStatus";
import SunriseAndSunset from "./SunriseAndSunset";
import Humidity from "./Humidity";
import MinMaxTemp from "./MinMaxTemp";
import useWeather from "../../hooks/useWeather";
import { getTemp } from "../../helpers/getTemp";
import { getWeatherIcon } from "../../helpers/getWeatherIcon";
import { useCurrentLocationContext } from "../hoc/WithCurrentLocation";

export default function CurrentWeather() {
  const { weather } = useWeather();
  const { location } = useCurrentLocationContext();

  const tempMax = weather?.current?.temp;
  const tempMin = weather?.daily[0]?.temp?.min;

  return (
    <View style={styles.currentWeather}>
      {getWeatherIcon(weather?.current?.weather[0]?.id)}

      <Text style={styles.cityName}>
        {location?.isoCountryCode}, {location?.cityName}
      </Text>

      <View style={styles.weatherBox}>
        <Text style={styles.weatherValue}>
          {getTemp(weather?.current?.temp)}
        </Text>

        <Text style={styles.weatherDegree}>°C</Text>
      </View>

      <View style={styles.moreInfo}>
        <WindStatus windSpeed={weather?.current?.wind_speed} />

        <SunriseAndSunset weather={weather?.current} />

        <Humidity humidity={weather?.current?.humidity} />

        <MinMaxTemp min={getTemp(tempMin)} max={getTemp(tempMax)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  currentWeather: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  cityName: {
    fontSize: 34,
  },
  weatherBox: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 10,
  },
  weatherValue: {
    fontWeight: "600",
    fontSize: 74,
  },
  weatherDegree: {
    fontSize: 32,
  },
  dateBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 5,
  },
  day: {
    fontWeight: "500",
    fontSize: 18,
  },
  time: {
    fontSize: 18,
    opacity: 0.7,
  },
  moreInfo: {
    width: "100%",
    gap: 15,
    borderRadius: 15,
    marginTop: 25,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
