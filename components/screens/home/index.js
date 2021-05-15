import React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import UserInput from "../../GenericComponents/user-input";

export const Home = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <UserInput title={"EMAIL:"} />
        </View>
        <View style={styles.inputContainer}>
          <UserInput title={"PASSWORD:"} />
        </View>
        <View style={styles.inputContainer}></View>
      </View>
    </SafeAreaView>
  );
};
