import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

import { WeatherBlockInfoStyles } from "../../styles/WeatherBlockInfo";
import { WeatherDataCurrent } from "../../types/entities/WeatherData";

interface SunriseAndSunsetProps {
  weather: WeatherDataCurrent;
}

interface Data {
  sunrise: string;
  sunset: string;
}

export default function SunriseAndSunset({ weather }: SunriseAndSunsetProps) {
  const [data, setData] = useState<Partial<Data>>({});

  useEffect(() => {
    if (weather) {
      setData(() => ({
        sunset: dayjs(new Date(weather?.sunset * 1000)).format("HH:mm"),
        sunrise: dayjs(new Date(weather?.sunrise * 1000)).format("HH:mm"),
      }));
    }
  }, [weather]);

  return (
    <View style={WeatherBlockInfoStyles.block}>
      <View style={WeatherBlockInfoStyles.head}>
        <Text style={WeatherBlockInfoStyles.title}>Sunrise & Sunset</Text>
      </View>

      <View style={WeatherBlockInfoStyles.content}>
        <View style={styles.sunriseAndSunsetContent}>
          <View style={styles.sunriseAndSunsetBlock}>
            <Image
              style={styles.icon}
              source={require("../../assets/sunrise.png")}
            />

            <Text style={styles.time}>{data?.sunrise}</Text>
          </View>

          <View style={styles.sunriseAndSunsetBlock}>
            <Image
              style={styles.iconReverse}
              source={require("../../assets/sunrise.png")}
            />

            <Text style={styles.time}>{data?.sunset}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sunriseAndSunsetContent: {
    gap: 10,
  },
  sunriseAndSunsetBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  time: {
    fontSize: 24,
    fontFamily: "Rubik_400Regular",
  },
  icon: {
    width: 40,
    height: 40,
  },
  iconReverse: {
    width: 40,
    height: 40,
    transform: [{ rotate: "180deg" }],
  },
});
