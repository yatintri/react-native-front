/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { LogBox } from 'react-native';

import React from 'react';
import OnboardingScreen from './src/screens/OnboardingScreen';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';



LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const Stack = createNativeStackNavigator();

function App ()  {
    return(
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown:false}}>
          <Stack.Screen component={OnboardingScreen} name="Onboarding"  /> 
          <Stack.Screen component={AppStack} name="AppStack" />
          <Stack.Screen component={LoginScreen} name="Login"  />
          {/* <Stack.Screen component={HomeScreen} name="Home" /> */}

        </Stack.Navigator>
        
      </NavigationContainer>
    );
}

export default App;
