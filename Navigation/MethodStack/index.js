import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Brew } from "../../components/Screens/Brew";
import { BrewRecipe } from "../../components/Screens/BrewRecipe";

const BrewMethods = createStackNavigator();

export const MethodStack = () => {
  return (
    <BrewMethods.Navigator screenOptions={{ headerShown: false }}>
      <BrewMethods.Screen name="Brew" component={Brew} />
      <BrewMethods.Screen name="BrewRecipe" component={BrewRecipe} />
    </BrewMethods.Navigator>
  );
};
