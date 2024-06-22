import React from 'react';
import {View , Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import Destination_Search from '../Screens/Destination_Search';
import Detailed_product from '../Screens/Detailed_product';
import AddressScreen from '../Screens/AddressScreen';
import ShoppingCartScreen from '../Screens/ShoopingCartScreen';


const Stack = createStackNavigator();

const Explore_cart_navigator = (props) => {
    return (
        <Stack.Navigator>

         <Stack.Screen
            name = {"ShoopingCartScreen"}
            component = {ShoppingCartScreen}
            options = {{
            //headerShown : false ,
            title: "Destination Search",
            //headerBackTitleVisible: false,
        }}
        />

        {/* <Stack.Screen
            name = {"AddressScreen"}
            component = {AddressScreen}
            options = {{
            //headerShown : false ,
            title: "Destination Search",
            //headerBackTitleVisible: false,
        }}
        /> */}

         <Stack.Screen
            name = {"DetailedProduct"}
            component = {Detailed_product}
            options = {{
            //headerShown : false ,
            title: "Destination Search",
            //headerBackTitleVisible: false,
        }}
        />
         
          
          
       

        </Stack.Navigator>
         
    )
}
export default Explore_cart_navigator;