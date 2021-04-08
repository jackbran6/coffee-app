import React from "react";
import { Dimensions, SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import UserInput from "../../minor-components/user-input";

const login = () => {
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

export default login;
