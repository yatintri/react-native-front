import React from "react";
import { View,Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown:false}}>
          <Stack.Screen component={OnboardingScreen} name="Onboarding"  /> 
          <Stack.Screen component={LoginScreen} name="Login"  />
        </Stack.Navigator>
    )
}

export default AuthStack;