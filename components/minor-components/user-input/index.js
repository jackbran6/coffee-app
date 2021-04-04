import React from "react";
import { TextInput, View } from "react-native";
import styles from "./styles";

const userInput = () => {
  const { title, placeholder, width, height } = React.useState();

  return (
    <View style={[styles.container, { width: width, height: height }]}>
      <Text>{title}</Text>
      <TextInput placeholder={placeholder} textContentType={password} />
    </View>
  );
};

export default userInput;
