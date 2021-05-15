import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import styles from "./styles";

export const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={styles.recentlyBrewed}>
          <Text style={styles.subtitle}>Recently Brewed</Text>
        </View>
        <View style={styles.popularRecipes}>
          <Text style={styles.subtitle}>Popular Recipes</Text>
        </View>
        <View style={styles.popularMethods}>
          <Text style={styles.subtitle}>Popular Brew Methods</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
