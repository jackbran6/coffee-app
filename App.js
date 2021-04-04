import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import drawerStack from "./navigation/drawer-navigator";
import stack from "./navigation/stack-navigator";

export default function App() {
  const RootStack = createStackNavigator();
  const RootStackScreen = () => {
    <NavigationContainer>
      <RootStack.Screen name={"LoginRegister"} component={stack} />
      <RootStack.Screen name={"Application"} component={drawerStack} />
    </NavigationContainer>;
  };
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
