import React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

export const Brew = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text>Brew</Text>
      </View>
    </SafeAreaView>
  );
};
