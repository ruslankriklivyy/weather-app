import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { useWeatherContext } from "../hoc/WithWeather";
import { PickerItem } from "../../types/entities/PickerItem";

const ITEMS: PickerItem[] = [
  { id: "1", title: "Today", type: "today" },
  { id: "2", title: "Week", type: "week" },
];

export default function Picker() {
  const { filterType, setFilterType } = useWeatherContext();

  return (
    <View style={styles.picker}>
      {ITEMS.map(({ id, title, type }) => (
        <TouchableOpacity
          key={id}
          activeOpacity={0.8}
          style={
            filterType === type ? styles.activePickerItem : styles.pickerItem
          }
          onPress={() => setFilterType(type)}
        >
          <Text
            style={
              filterType === type
                ? styles.pickerActiveItemText
                : styles.pickerItemText
            }
          >
            {title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  picker: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: 20,
  },
  pickerItem: {
    opacity: 0.6,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  activePickerItem: {
    opacity: 1,
    backgroundColor: "#5a90f5",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  pickerItemText: {
    fontSize: 21,
    fontWeight: "500",
    fontFamily: "Rubik_500Medium",
  },
  pickerActiveItemText: {
    fontSize: 21,
    fontWeight: "500",
    color: "#fff",
    fontFamily: "Rubik_500Medium",
  },
});
