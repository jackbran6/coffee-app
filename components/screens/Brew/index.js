import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";

export const Brew = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Brew Methods</Text>
        </View>
        <View style={styles.brewCards}>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
          <View style={styles.brewMethodContainer}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
