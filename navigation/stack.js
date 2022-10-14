import React from "react";
import {View,Text,TouchableOpacity} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const NativeStack = createNativeStackNavigator();

const ScreenOne = ({ navigation: { navigate } }) =>{

    return(
        <TouchableOpacity onPress = {() =>{
            navigate('Two');
        }}
        >
            <Text>Hello1</Text>
        </TouchableOpacity>
    ); 
}

const ScreenTwo = ({ navigation: { navigate } }) =>{

    return(
        <TouchableOpacity onPress = {() =>{
            navigate('Three');
        }}
        >
            <Text>Hello2</Text>
        </TouchableOpacity>
    ); 
}
const ScreenThree = ({ navigation: { setOptions } }) =>{

    return(
        <TouchableOpacity onPress = {() =>{
            setOptions({title : "Hi"});
        }}
        >
            <Text>Hello2</Text>
        </TouchableOpacity>
    ); 
}

const Stack = () =>{

    return(
        <NativeStack.Navigator screenOptions={{
            animation: "slide_from_bottom",
            headerStyle : {
                backgroundColor : "tomato"},
        }}>
            <NativeStack.Screen name = "One" component={ScreenOne}/>
            <NativeStack.Screen name = "Two" component={ScreenTwo}/>
            <NativeStack.Screen name = "Three" component={ScreenThree}/>
        </NativeStack.Navigator>
    );
}
export default Stack;