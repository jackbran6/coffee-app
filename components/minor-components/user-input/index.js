import React from "react";
import { TextInput, Text, View } from "react-native";
import styles from "./styles";

const userInput = () => {
  const { title, placeholder } = React.useState();

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
};

export default userInput;
