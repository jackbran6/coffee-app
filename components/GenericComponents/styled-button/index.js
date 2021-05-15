import React from "react";
import { TextInput, Text, View } from "react-native";
import styles from "./styles";

const userInput = (props) => {
  const { title, placeholder } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
};

export default userInput;
