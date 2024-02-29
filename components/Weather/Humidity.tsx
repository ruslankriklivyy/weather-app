import { View, Text, StyleSheet } from "react-native";
import { MotiView } from "moti";
import { useEffect, useState } from "react";

import { WeatherBlockInfoStyles } from "../../styles/WeatherBlockInfo";
import { getHumidityStatus } from "../../helpers/getHumidityStatus";

interface HumidityProps {
  humidity?: number;
}

export default function Humidity({ humidity = 0 }: HumidityProps) {
  const [isAnimate, setIsAnimate] = useState(true);

  useEffect(() => {
    setIsAnimate(true);
    const timeout = setTimeout(() => {
      setIsAnimate(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={WeatherBlockInfoStyles.block}>
      <View style={WeatherBlockInfoStyles.head}>
        <Text style={WeatherBlockInfoStyles.title}>Humidity</Text>
      </View>

      <View style={WeatherBlockInfoStyles.content}>
        <View style={styles.humidityContent}>
          <Text style={styles.humidityPercent}>{humidity}%</Text>

          <View style={styles.humidityChart}>
            <MotiView
              animate={{
                opacity: isAnimate ? 0.6 : 1,
                height: isAnimate ? "0%" : `${humidity}%`,
              }}
              transition={{
                type: "spring",
                duration: 1500,
              }}
              style={styles.humidityChartRound}
            />
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
    fontSize: 16,
    fontFamily: "Rubik_400Regular",
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
