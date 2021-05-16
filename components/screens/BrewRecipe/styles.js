import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    marginLeft: "5%",
    marginRight: "5%",
    minHeight: Dimensions.get("window").height,
  },
});
