import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    justifyContent: "center",
  },
  container: {
    padding: "5%",
    display: "flex",
    justifyContent: "center",
  },
});
