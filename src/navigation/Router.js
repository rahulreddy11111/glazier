import React from 'react';
import { Text ,View } from 'react-native';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main_screen from '../Screens/Main_screen';
import Dup_screen from '../Screens/dup/index';
import 'react-native-gesture-handler';
import Search_resultscreen from './Search_resultscreen';
import HomeTabNavigator from './HomeTabNavigator';
import Customer_care from '../components/Account_detailed/Customer_care';
import Destination_Search from '../Screens/Destination_Search';


const Stack = createStackNavigator();

const Router = (props) => {
  
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={HomeTabNavigator}
            options={{ 
              headerShown: false}}
          />

          {/* <Stack.Screen
            name="Hello"
            component={Dup_screen}
            options={{ 
              headerShown: false }}
          /> */}
          <Stack.Screen
          name={"customer care"}
          component={Customer_care}
          options={{
            title: "Customer care"
          }}
        />  
        

        </Stack.Navigator>
      </NavigationContainer>
   
  );
};

export default Router;
