import { View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import {
  AutocompleteDropdown,
  TAutocompleteDropdownItem,
} from "react-native-autocomplete-dropdown";

import { citiesAPI } from "../../api/citiesAPI";
import { useCurrentLocationContext } from "../hoc/WithCurrentLocation";

export default function SearchPlace() {
  const [cities, setCities] = useState<any[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const { setLocation } = useCurrentLocationContext();

  const onSelectItem = (option: TAutocompleteDropdownItem) => {
    if (!option) return;

    const selectedCity = cities.find((city) => +city.id === +option.id);
    setLocation({
      latitude: selectedCity.latitude,
      longitude: selectedCity.longitude,
      cityName: selectedCity.city,
      isoCountryCode: selectedCity.countryCode,
    });
  };

  const fetchCities = async () => {
    try {
      const citiesFromApi = await citiesAPI.fetchCities(searchValue);
      // @ts-ignore
      setCities(citiesFromApi?.map((city) => ({ ...city, title: city.name })));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, [searchValue]);

  return (
    <View style={styles.searchPlace}>
      <AutocompleteDropdown
        textInputProps={{ placeholder: "Enter a city name" }}
        containerStyle={{ width: "100%" }}
        inputContainerStyle={{ width: "100%" }}
        showChevron={false}
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        onSelectItem={onSelectItem}
        onChangeText={setSearchValue}
        dataSet={cities}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchPlace: {
    width: "80%",
  },
  searchPlaceInput: {},
});
