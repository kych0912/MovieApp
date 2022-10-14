import AppLoading from 'expo-app-loading';
import React from 'react';
import * as Font from 'expo-font';
import { Text,useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAssets } from 'expo-asset';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme
} from "@react-navigation/native";
import Tabs from "./navigation/Tabs";
import Stack from './navigation/stack';
import Root from "./navigation/Root"


export default function App() {
  const [assets] = useAssets([require("./Image1.png")]);
  const [fonts] = Font.useFonts(Ionicons.font);
  const isDark = useColorScheme() === "dark";

  if (!assets || !fonts) {
    return (
      <AppLoading />
    );
  }
  return (
    <NavigationContainer theme = {isDark?DarkTheme:DefaultTheme}>
      <Root/>
    </NavigationContainer>
  );
}