import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export const RecipeCard = ({ title, water, coffee, time }) => {
  return (
    <TouchableOpacity style={styles.recipeContainer}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.subtitle}>Water</Text>
      <Text style={styles.cardContent}>{water}</Text>
      <Text style={styles.subtitle}>Coffee Dose</Text>
      <Text style={styles.cardContent}>{coffee}</Text>
      <Text style={styles.subtitle}>Brew Time</Text>
      <Text style={styles.cardContent}>{time}</Text>
    </TouchableOpacity>
  );
};
