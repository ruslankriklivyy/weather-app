import { StyleSheet, TouchableOpacity } from "react-native";
import HomeSvg from "../../assets/home.svg";

export default function BackHome() {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <HomeSvg width={30} height={30} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
