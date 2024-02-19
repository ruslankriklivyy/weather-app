import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";

import SearchPlace from "./components/Weather/SearchPlace";
import BackHome from "./components/Weather/BackHome";
import CurrentWeather from "./components/Weather/CurrentWeather";
import WithCurrentLocation from "./components/hoc/WithCurrentLocation";

export default function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <WithCurrentLocation>
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
      </WithCurrentLocation>
    </AutocompleteDropdownContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#f9fafc",
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: StatusBar.currentHeight,
  },
  head: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  content: {},
});
