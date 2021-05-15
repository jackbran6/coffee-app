import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../../components/Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Brew } from "../../components/Screens/Brew";
import { Settings } from "../../components/Screens/Settings";
import { Recipes } from "../../components/Screens/Recipes";

const Tabs = createBottomTabNavigator();
export const TabScreens = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen name={"Home"} component={Home} />
      <Tabs.Screen name={"Brew"} component={Brew} />
      <Tabs.Screen name={"Recipes"} component={Recipes} />
      <Tabs.Screen name={"Settings"} component={Settings} />
    </Tabs.Navigator>
  );
};
