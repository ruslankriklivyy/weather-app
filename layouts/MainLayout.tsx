import { StatusBar, StyleSheet, View } from "react-native";
import { MotiView } from "moti";
import { useEffect } from "react";

import SearchPlace from "../components/Weather/SearchPlace";
import BackHome from "../components/Weather/BackHome";
import CurrentWeather from "../components/Weather/CurrentWeather";
import { useWeatherContext } from "../components/hoc/WithWeather";
import { useCurrentLocationContext } from "../components/hoc/WithCurrentLocation";

export default function MainLayout() {
  const { location } = useCurrentLocationContext();
  const { isAnimate, setIsAnimate } = useWeatherContext();

  useEffect(() => {
    setIsAnimate(true);
    setTimeout(() => {
      setIsAnimate(false);
    }, 600);
  }, [location]);

  return (
    <MotiView
      animate={{
        opacity: isAnimate ? 0 : 1,
        transform: isAnimate ? [{ translateY: 0 }] : [{ translateY: 10 }],
      }}
      transition={{
        type: "spring",
        delay: 500,
        duration: 700,
      }}
    >
      <View style={styles.head}>
        <SearchPlace />

        <BackHome />
      </View>

      <View style={styles.content}>
        <CurrentWeather />
      </View>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: StatusBar.currentHeight,
  },
  content: {
    paddingBottom: 40,
  },
});
