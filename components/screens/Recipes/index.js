import React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

export const Recipes = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text>Recipes</Text>
      </View>
    </SafeAreaView>
  );
};
