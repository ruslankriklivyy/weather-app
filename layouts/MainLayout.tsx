import { StyleSheet, View } from "react-native";

import SearchPlace from "../components/Weather/SearchPlace";
import BackHome from "../components/Weather/BackHome";
import CurrentWeather from "../components/Weather/CurrentWeather";

export default function MainLayout() {
  return (
    <>
      <View style={styles.head}>
        <SearchPlace />

        <BackHome />
      </View>

      <View style={styles.content}>
        <CurrentWeather />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  content: {
    paddingBottom: 40,
  },
});
