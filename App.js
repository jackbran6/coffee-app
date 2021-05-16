import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { TabScreens } from "./Navigation/TabNavigation/index";
import { useFonts } from "expo-font";

const navTheme = DefaultTheme;
navTheme.colors.background = "#fff";

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      theme={navTheme}
    >
      <RootStack.Screen name={"TabScreens"} component={TabScreens} />
    </RootStack.Navigator>
  );
};

export default function App() {
  const [loaded] = useFonts({
    Poppins: require("./assets/Fonts/Poppins-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer theme={navTheme}>
      <RootStackScreen theme={navTheme} />
    </NavigationContainer>
  );
}
