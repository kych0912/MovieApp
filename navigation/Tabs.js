import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import { View, Text, useColorScheme } from "react-native";  
import { BLACK_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR } from "../color.js";
import { Ionicons } from '@expo/vector-icons';
import Stack from "./stack"


const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";
  return(
    <Tab.Navigator screenOptions = {{
      tabBarStyle : {   backgroundColor: isDark ? BLACK_COLOR : "white",
    },
    tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLACK_COLOR,
    tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
    headerStyle: {
      backgroundColor: isDark ? BLACK_COLOR : "white",
    },
    headerTitleStyle: {
      color: isDark ? "white" : BLACK_COLOR,
    },
    tabBarLabelStyle : {
      marginTop:-5,
      fontSize:12,
      fontWeight:"600",
      paddingBottom:5,
    }
    }}>
      <Tab.Screen name="Movies" component={Movies}
      options={{
        headerShown : false,
        tabBarIcon: ({focused,  color, size }) => {
          console.log(focused,color,size);
          return <Ionicons name={focused ? "film" : "film-outline"} size={size} color = {color}/>
        }
      }}/>
      <Tab.Screen name="Tv" component={Tv} 
      options={{
        tabBarIcon: ({focused,  color, size }) => {
          console.log(focused,color,size);
          return <Ionicons name={focused ? "tv" : "tv-outline"} size={size} color = {color}/>
        }
      }} />
      <Tab.Screen name="Search" component={Search} 
      options={{
        tabBarIcon: ({focused,  color, size }) => {
          console.log(focused,color,size);
          return <Ionicons name={focused ? "search" : "search-outline"} size={size} color = {color}/>
        }
      }} />
    </Tab.Navigator>
  );
};

export default Tabs;