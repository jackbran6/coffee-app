import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./styles";
import UserInput from "../../minor-components/user-input";

const login = () => {
  return (
    <View style={styles.container}>
      <UserInput name={"Username"} placeholder={"John Dough"} />
      <Text>Hello</Text>
    </View>
  );
};

export default login;
