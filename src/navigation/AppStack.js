import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import PatientScreen from "../screens/PatientScreen";
import CaretakerScreen from "../screens/CaretakerScreen";
import MedicineScreen from "../screens/MedicineScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

const AuthStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} 
          screenOptions={{
            headerShown:false ,
            drawerActiveBackgroundColor: '#aa18ea',
            drawerActiveTintColor: '#fff',
            drawerInactiveTintColor: '#333',
            drawerLabelStyle: {
            marginLeft: -25,fontSize: 15
            },
            }}>
          <Drawer.Screen component={HomeScreen} name="Home"  options={{
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
       /> 
          <Drawer.Screen component={ProfileScreen} name="Profile"   options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      /> 
          <Drawer.Screen component={PatientScreen} name="Patient"  options={{
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}/> 
          <Drawer.Screen component={CaretakerScreen} name="Caretaker" options={{
          drawerIcon: ({color}) => (
            <Ionicons name="people-outline" size={22} color={color} />
          ),
        }} />
          <Drawer.Screen component={MedicineScreen} name="Medicines"  options={{
          drawerIcon: ({color}) => (
            <Ionicons name="medkit-outline" size={22} color={color} />
          ),
        }}/>  
          <Drawer.Screen component={SettingsScreen} name="Settings" options={{
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }} /> 
        </Drawer.Navigator>
    )
}

export default AuthStack;