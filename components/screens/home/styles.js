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
  subtitle: {
    fontFamily: "Poppins",
    fontSize: 18,
  },
  recentlyBrewed: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    height: Dimensions.get("window").height / 3,
    backgroundColor: "#fce1a2",
    padding: "2%",
    borderRadius: 10,
  },
  popularRecipes: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    height: Dimensions.get("window").height / 3,
    backgroundColor: "#fcb7a2",
    padding: "2%",
    borderRadius: 10,
  },
  popularMethods: {
    width: "90%",
    height: Dimensions.get("window").height / 3,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    backgroundColor: "#a2b9fc",
    padding: "2%",
    borderRadius: 10,
  },
});
