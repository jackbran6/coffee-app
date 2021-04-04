import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import login from "../../components/screens/login";
import signUp from "../../components/screens/sign-up";

const stackNavigator = () => {
  const Stack = createStackNavigator();
  const stackScreen = () => {
    <NavigationContainer>
      <Stack.Screen name={"login"} component={login} />
      <Stack.Screen name={"signup"} component={signUp} />
    </NavigationContainer>;
  };

  return <View></View>;
};

export default stackNavigator;
