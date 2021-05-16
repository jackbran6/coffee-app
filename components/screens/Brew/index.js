import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";

export const Brew = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Brew Methods</Text>
        </View>
        <View style={styles.brewCards}>
          <View style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>French Press</Text>
          </View>
          <View style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>AeroPress</Text>
          </View>
          <View style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Cone Filter</Text>
          </View>
          <View style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Filter Machine</Text>
          </View>
          <View style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Chemex</Text>
          </View>
          <View style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Gold Filter</Text>
          </View>
          <View style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Espresso</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
