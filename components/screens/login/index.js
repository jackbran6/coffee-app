import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import UserInput from "../../minor-components/user-input";

const login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <UserInput title={"EMAIL:"} />
        </View>
        <View style={styles.inputContainer}>
          <UserInput title={"PASSWORD:"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default login;
