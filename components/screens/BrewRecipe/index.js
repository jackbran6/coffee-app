import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export const BrewRecipe = () => {
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>French Press</Text>
        </View>
        <TouchableOpacity style={styles.recipeContainer}>
          <Text style={styles.cardTitle}>3 Cup Recipe</Text>
          <Text style={styles.subtitle}>Water</Text>
          <Text style={styles.cardContent}>330g at 96 ̊C (205 ̊F)</Text>
          <Text style={styles.subtitle}>Coffee Dose</Text>
          <Text style={styles.cardContent}>20g coarse grounds</Text>
          <Text style={styles.subtitle}>Brew Time</Text>
          <Text style={styles.cardContent}>5 minutes</Text>
        </TouchableOpacity>
        <View style={styles.recipeContainer}>
          <Text style={styles.cardTitle}>8 Cup Recipe</Text>
          <Text style={styles.subtitle}>Water</Text>
          <Text style={styles.cardContent}>850g at 96 ̊C (205 ̊F)</Text>
          <Text style={styles.subtitle}>Coffee Dose</Text>
          <Text style={styles.cardContent}>51g coarse grounds</Text>
          <Text style={styles.subtitle}>Brew Time</Text>
          <Text style={styles.cardContent}>5 minutes</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Ionicons name="ios-add-outline" size={50} color="#d3d3d3" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
