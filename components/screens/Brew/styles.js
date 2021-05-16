import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    margin: "5%",
    minHeight: Dimensions.get("window").height,
  },
  titleContainer: {},
  title: {
    fontFamily: "Poppins",
    fontSize: 36,
    marginBottom: "2%",
  },
  subtitle: {
    fontFamily: "Poppins",
    fontSize: 18,
  },
  brewCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  brewMethodContainer: {
    backgroundColor: "pink",
    borderRadius: 10,
    width: Dimensions.get("screen").width / 2.4,
    height: Dimensions.get("screen").width / 2.4,
    marginBottom: "8%",
  },
});
