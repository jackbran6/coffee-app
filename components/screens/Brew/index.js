import React from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

export const Brew = ({ navigation }) => {
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
          <TouchableOpacity
            style={styles.brewMethodContainer}
            onPress={() => navigation.navigate("BrewRecipe")}
          >
            <Text style={styles.subtitle}>French Press</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>AeroPress</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Cone Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Filter Machine</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Chemex</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Gold Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.brewMethodContainer}>
            <Text style={styles.subtitle}>Espresso</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
