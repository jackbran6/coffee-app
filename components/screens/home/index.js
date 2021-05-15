import React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";

export const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};
