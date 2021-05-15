import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../../components/Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Brew } from "../../components/Screens/Brew";
import { Settings } from "../../components/Screens/Settings";
import { Recipes } from "../../components/Screens/Recipes";
import { Feather } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
export const TabScreens = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        showLabel: false,
        style: { backgroundColor: "#fff" },
      }}
    >
      <Tabs.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name={"Brew"}
        component={Brew}
        options={{
          tabBarLabel: "Brew",
          tabBarIcon: ({ color, size }) => (
            <Feather name="coffee" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name={"Recipes"}
        component={Recipes}
        options={{
          tabBarLabel: "Recipes",
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name={"Settings"}
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color="black" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
