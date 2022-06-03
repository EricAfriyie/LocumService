import React,{useState} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  TouchableOpacity,ActivityIndicator,
} from 'react-native';

import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../core/theme';
import LocumDrawer from './LocumDrawer';
import InstitutionDrawer from './InstitutionDrawer';



import {
  StartScreen,LoginScreen,
  RegisterScreen,ResetPasswordScreen,
  Dashboard,InstLocum,
  Onboard,OTP,FullTime,
  JobDetail,LocumProfileEdit,
  InstProfileEdit,LocumOffers,
  AddJob,Conclude,JobUpload,
  Profile,InstProfileView,
  SavedChanges,LocumSavedChanges,
  LocumProfileSetUp1,LocumProfileSetUp2,
  LocumProfileSetUp3, InstitutionProfileSetUp1,
  InstitutionProfileSetUp2,} from '../screens'
  


import 'react-native-gesture-handler';

const Stack = createStackNavigator();


function Nav({ navigation }) {
 
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Onboard"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="InstLocum" component={InstLocum} />
          <Stack.Screen name="Onboard" component={Onboard} />
          <Stack.Screen name="Conclude" component={Conclude} />
          <Stack.Screen name="JobUpload" component={JobUpload} />
          <Stack.Screen name="InstProfileEdit" component={InstProfileEdit} />
          <Stack.Screen name="LocumProfileEdit" component={LocumProfileEdit} />
          <Stack.Screen name="LocumSavedChanges" component={LocumSavedChanges} />
          <Stack.Screen name="LocumProfileSetUp1" component={LocumProfileSetUp1} />
          <Stack.Screen name="LocumProfileSetUp2" component={LocumProfileSetUp2} />
          <Stack.Screen name="LocumProfileSetUp3" component={LocumProfileSetUp3} />
          <Stack.Screen name="InstitutionProfileSetUp1" component={InstitutionProfileSetUp1} />
          <Stack.Screen name="InstitutionProfileSetUp2" component={InstitutionProfileSetUp2} />
          <Stack.Screen name="InstProfileView" component={InstProfileView} />
          <Stack.Screen name="SavedChanges" component={SavedChanges} />
          <Stack.Screen name="LocumDrawer" component={LocumDrawer} />
          <Stack.Screen name="InstitutionDrawer" component={InstitutionDrawer} />
          <Stack.Screen name="AddJob" component={AddJob} />
          <Stack.Screen name="JobDetail" component={JobDetail} />
          <Stack.Screen name="LocumOffers" component={LocumOffers} />
          <Stack.Screen name="FullTime" component={FullTime} />
          <Stack.Screen name="OTP" component={OTP} />
          
         
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Nav;
