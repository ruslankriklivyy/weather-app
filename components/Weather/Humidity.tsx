import { View, Text, StyleSheet } from "react-native";

import { WeatherBlockInfoStyles } from "../../styles/WeatherBlockInfo";
import { getHumidityStatus } from "../../helpers/getHumidityStatus";

interface HumidityProps {
  humidity?: number;
}

export default function Humidity({ humidity = 0 }: HumidityProps) {
  return (
    <View style={WeatherBlockInfoStyles.block}>
      <View style={WeatherBlockInfoStyles.head}>
        <Text style={WeatherBlockInfoStyles.title}>Humidity</Text>
      </View>

      <View style={WeatherBlockInfoStyles.content}>
        <View style={styles.humidityContent}>
          <Text style={styles.humidityPercent}>{humidity}%</Text>

          <View style={styles.humidityChart}>
            <View
              style={{ ...styles.humidityChartRound, height: `${humidity}%` }}
            ></View>
          </View>
        </View>

        <Text style={styles.humidityStatus}>{getHumidityStatus(humidity)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  humidityContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  humidityPercent: {
    fontSize: 24,
    fontFamily: "Rubik_400Regular",
  },
  humidityStatus: {
    marginTop: 20,
  },
  humidityChart: {
    position: "relative",
    width: 30,
    height: 70,
    borderWidth: 2,
    borderColor: "#bdbbbb",
    borderStyle: "solid",
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  humidityChartRound: {
    position: "absolute",
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#66a0fd",
    right: 5,
    left: 5,
    bottom: 5,
  },
});
