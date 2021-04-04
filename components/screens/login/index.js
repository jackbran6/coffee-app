import React from "react";
import { SafeAreaView, TextInput, View } from "react-native";
import styles from "./styles";
import userInput from "../../minor-components/user-input";

const login = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <userInput
          name={"Username"}
          placeholder={"John Dough"}
          width={"50%"}
          height={20}
        />
      </View>
    </SafeAreaView>
  );
};

export default login;
