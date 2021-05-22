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
import { RecipeCard } from "../../GenericComponents/RecipeCard/index";
import Data from "../../../coffee-data.json";

export const BrewRecipe = () => {
  let recipe;

  Data.map((method) => {
    if (method.name === "French Press") {
      recipe = method.recipes;
    }
  });

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.screen}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>French Press</Text>
        </View>
        {recipe.map((card) => {
          return (
            <RecipeCard
              title={card.title}
              coffee={card.coffee}
              time={card.time}
              water={card.water}
            />
          );
        })}
        <TouchableOpacity style={styles.buttonContainer}>
          <Ionicons name="ios-add-outline" size={50} color="#d3d3d3" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
