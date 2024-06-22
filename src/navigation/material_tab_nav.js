import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import GraphWater from "../Screens/Graph_water";
import { NavigationContainer } from '@react-navigation/native';
import AddressScreen from "../Screens/AddressScreen";
import Water_indi_graph from "../Screens/Water_indi_graph";
import Tds_indi_graph from "../Screens/Tds_indi_graph";



const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
    return (
        
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#82439c',
                tabBarIndicatorStyle: {
                    backgroundColor: '#1cb5ba'
                },
            })}
        >
            <Tab.Screen
             name="Water "
              component={Water_indi_graph} 
               />

            <Tab.Screen 
            name="TDS" 
            component={Tds_indi_graph} 
            />

        </Tab.Navigator>
        
    );
};
export default SearchResultsTabNavigator;