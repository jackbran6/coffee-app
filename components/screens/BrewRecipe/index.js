import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";

export const BrewRecipe = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <Text>Recipe for specific Brew Method</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
