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
  },
  recipeContainer: {
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2.5%",
    marginBottom: "2.5%",
    borderColor: "#d3d3d3",
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get("window").width - Dimensions.get("window").width / 10,
    paddingLeft: "3%",
    paddingRight: "3%",
    paddingBottom: "3%",
    paddingTop: "1%",
  },
  cardTitle: {
    fontFamily: "Poppins",
    fontSize: 24,
    height: 30,
  },
  subtitle: {
    fontFamily: "Poppins",
    fontSize: 18,
    height: 24,
  },
  cardContent: {
    height: 16,
  },
  buttonContainer: {
    alignItems: "center",
    borderColor: "#d3d3d3",
    borderRadius: 10,
    borderWidth: 1,
    width: Dimensions.get("window").width - Dimensions.get("window").width / 10,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "2.5%",
    marginBottom: "2.5%",
  },
});
