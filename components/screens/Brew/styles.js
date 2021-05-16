import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    marginLeft: "5%",
    marginRight: "5%",
    minHeight: Dimensions.get("window").height,
  },
  titleContainer: {},
  title: {
    fontFamily: "Poppins",
    fontSize: 36,
    marginBottom: "5%",
  },
  subtitle: {
    fontFamily: "Poppins",
    padding: "5%",
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
