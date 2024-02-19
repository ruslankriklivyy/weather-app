import { View, Text, StyleSheet } from "react-native";

import ColdSvg from "../../assets/cold.svg";
import HotSvg from "../../assets/hot.svg";
import { WeatherBlockInfoStyles } from "../../styles/WeatherBlockInfo";

interface MinMaxTempProps {
  min?: number;
  max?: number;
}

export default function MinMaxTemp({ min, max }: MinMaxTempProps) {
  return (
    <View style={WeatherBlockInfoStyles.block}>
      <View style={WeatherBlockInfoStyles.head}>
        <Text style={WeatherBlockInfoStyles.title}>Min & Max temperature</Text>
      </View>

      <View style={WeatherBlockInfoStyles.content}>
        <View style={styles.minMaxTempContent}>
          <View style={styles.minMaxTemp}>
            <ColdSvg width={40} height={40} />

            <Text style={styles.temp}>{min}°</Text>
          </View>

          <View style={styles.minMaxTemp}>
            <HotSvg width={40} height={40} />

            <Text style={styles.temp}>{max}°</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  minMaxTempContent: {
    flexDirection: "column",
    gap: 5,
  },
  minMaxTemp: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  temp: {
    fontSize: 24,
  },
});
