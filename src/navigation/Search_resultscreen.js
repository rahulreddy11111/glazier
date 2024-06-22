import React, { useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tds_tracker from "../Screens/Tds_tracker";
import Water_consumed from "../Screens/Water_consumed";
import Main_screen from "../Screens/Main_screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const Search_resultscreen = (props) => {

  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarStyle: {backgroundColor: "white"},
      }}>
      <Tab.Screen name="Main_screen" component={Main_screen} />
      <Tab.Screen name="Water_consumed" component={Water_consumed} />
    </Tab.Navigator>
  );
};

export default Search_resultscreen;