import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import login from "../../components/screens/login";
import signUp from "../../components/screens/sign-up";

const Stack = createStackNavigator();
const stackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"login"} component={login} />
      <Stack.Screen name={"signup"} component={signUp} />
    </Stack.Navigator>
  );
};

export default stackScreen;
