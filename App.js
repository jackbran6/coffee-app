import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import DrawerStack from "./navigation/drawer-navigator";
import StackScreen from "./navigation/stack-navigator";

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={"LoginRegister"} component={StackScreen} />
      <RootStack.Screen name={"Application"} component={DrawerStack} />
    </RootStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
