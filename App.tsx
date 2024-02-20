import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import SearchPlace from "./components/Weather/SearchPlace";
import BackHome from "./components/Weather/BackHome";
import CurrentWeather from "./components/Weather/CurrentWeather";
import WithCurrentLocation from "./components/hoc/WithCurrentLocation";
import WithWeather from "./components/hoc/WithWeather";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AutocompleteDropdownContextProvider>
      <WithCurrentLocation>
        <WithWeather>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <View style={styles.head}>
                <SearchPlace />

                <BackHome />
              </View>

              <View style={styles.content}>
                <CurrentWeather />
              </View>
            </ScrollView>
          </SafeAreaView>
        </WithWeather>
      </WithCurrentLocation>
    </AutocompleteDropdownContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#f9fafc",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  head: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  content: {},
});
