import React,{useState} from 'react';
import { Text } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from 'expo-font';
import {Ionicons} from "@expo/vector-icons";
import { useAssets } from 'expo-asset';

export default function App() {
  const [assets, error] = useAssets([require('./Image1.png')]);
  const [ready, setReady] = useState(false);
  const [loaded] = Font.useFonts(Ionicons.font);

  console.log(assets);
  console.log(loaded);

  if (!assets||!loaded) {
    return (
      <AppLoading/>
    );
  }
  return <Text>We are done loading!</Text>;
}