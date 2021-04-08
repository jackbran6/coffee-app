import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  screen: {
    backgroundColor: "rgb(250, 250, 243)",
    height: Dimensions.get("window").height,
    justifyContent: "center",
  },
  container: {
    padding: "5%",
    display: "flex",
    justifyContent: "center",
  },
  inputContainer: {
    borderColor: "rgb(210, 210, 204)",
    borderTopWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
