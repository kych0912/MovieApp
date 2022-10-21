import React from "react";
import { View, Text,TouchableOpacity,StyleSheet } from "react-native";

const Movies = ({navigation : {navigate}}) => (
  <TouchableOpacity onPress={() => {
    navigate("Stack",{screen:"Three"});
  }}
  style={styles.movie}>
    <Text>Movies</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  movie :{
    flex: 1, 
    justifyContent: "center",
    alignItems: "center" 
  }
})
export default Movies;