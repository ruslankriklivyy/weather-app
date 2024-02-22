import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik";

import WithCurrentLocation from "./components/hoc/WithCurrentLocation";
import WithWeather from "./components/hoc/WithWeather";
import MainLayout from "./layouts/MainLayout";
import WithTheme from "./components/hoc/WithTheme";

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
      <WithTheme>
        <WithCurrentLocation>
          <WithWeather>
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <MainLayout />
              </ScrollView>
            </SafeAreaView>
          </WithWeather>
        </WithCurrentLocation>
      </WithTheme>
    </AutocompleteDropdownContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#f9fafc",
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});
