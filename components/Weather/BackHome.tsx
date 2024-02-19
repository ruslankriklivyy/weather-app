import { StyleSheet, TouchableOpacity } from "react-native";

import HomeSvg from "../../assets/home.svg";
import { useCurrentLocationContext } from "../hoc/WithCurrentLocation";

export default function BackHome() {
  const { setDeviceLocation } = useCurrentLocationContext();

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={setDeviceLocation}>
      <HomeSvg width={30} height={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
