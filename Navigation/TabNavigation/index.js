import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../../components/Screens/Home";
import signUp from "../../components/Screens/sign-up";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();
export const TabScreens = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name={"Home"} component={Home} />
      <Tabs.Screen name={"signup"} component={signUp} />
    </Tabs.Navigator>
  );
};
