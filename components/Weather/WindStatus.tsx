import { View, Text, StyleSheet } from "react-native";

import { WeatherBlockInfoStyles } from "../../styles/WeatherBlockInfo";
import { getWindStatus } from "../../helpers/getWindStatus";

interface WindStatusProps {
  windSpeed?: number;
}

export default function WindStatus({ windSpeed }: WindStatusProps) {
  return (
    <View style={WeatherBlockInfoStyles.block}>
      <View style={WeatherBlockInfoStyles.head}>
        <Text style={WeatherBlockInfoStyles.title}>Wind Status</Text>
      </View>

      <View style={WeatherBlockInfoStyles.content}>
        <View style={styles.windStatus}>
          <Text style={styles.windValue}>{windSpeed}</Text>

          <Text style={styles.windDegree}>km/h</Text>
        </View>

        <Text style={styles.windStatusValue}>{getWindStatus(windSpeed)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  windStatus: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-end",
  },
  windValue: {
    fontWeight: "600",
    fontSize: 24,
  },
  windDegree: {
    fontSize: 16,
    marginBottom: 3,
  },
  windStatusValue: {
    fontSize: 16,
    marginTop: 15,
  },
});
