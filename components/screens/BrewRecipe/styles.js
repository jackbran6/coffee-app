import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

export default StyleSheet.create({
  screen: {
    backgroundColor: "#fff",
    minHeight: Dimensions.get("window").height,
  },
  titleContainer: {},
  title: {
    fontFamily: "Poppins",
    fontSize: 36,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
  },
  recipeContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2.5%",
    marginBottom: "2.5%",
    backgroundColor: "pink",
    borderRadius: 10,
    width: Dimensions.get("window").width - Dimensions.get("window").width / 10,
    height:
      Dimensions.get("window").width - Dimensions.get("window").width / 10,
  },
  cardTitle: {
    fontFamily: "Poppins",
    fontSize: 24,
  },
  subtitle: {
    fontFamily: "Poppins",
    fontSize: 18,
  },
});
