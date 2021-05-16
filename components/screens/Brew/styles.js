import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    marginLeft: "5%",
    marginRight: "5%",
    minHeight: Dimensions.get("screen").height,
  },
  titleContainer: {},
  title: {
    fontFamily: "Poppins",
    fontSize: 36,
  },
  subtitle: {
    fontFamily: "Poppins",
    padding: "5%",
    fontSize: 18,
  },
  brewMethodContainer: {
    borderRadius: 10,
    width: Dimensions.get("screen").width - Dimensions.get("screen").width / 10,
    marginTop: "2.5%",
    borderColor: "#d3d3d3",
    borderWidth: 1,
  },
});
