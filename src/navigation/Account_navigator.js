import React from 'react';
import {View , Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home';
import Destination_Search from '../Screens/Destination_Search';
import Account_profile from '../Screens/Account_profile';
import Terms_conditions from '../Screens/Account_full/Terms_conditions';
import Return_and_refund from '../Screens/Account_full/Return_and_refund';
import Join_our_team from '../Screens/Account_full/Join_our_team';
import AddressScreen from '../Screens/AddressScreen';
import Order_and_payment from '../Screens/Order_and_Payment';

const Stack = createStackNavigator();

const Account_navigator = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name = 'Home_screen'
            component = {Account_profile}
            options = {{
                //title : 'Explore'
                headerShown : false
            }}
            />
        <Stack.Screen
            name = {"Terms_conditions"}
            component = {Terms_conditions}
            options = {{
            //headerShown : false ,
            title: "Terms and Conditions",
            //headerBackTitleVisible: false,
        }}
        />
        <Stack.Screen
            name = {"Return_and_refund"}
            component = {Return_and_refund}
            options = {{
            //headerShown : false ,
            title: "Return and Refund",
            headerBackTitleVisible: false,
        }}
        />
        <Stack.Screen
            name = {"join_our_team"}
            component = {Join_our_team}
            options = {{
            //headerShown : false ,
            title: "Join our Team",
            headerBackTitleVisible: false,
        }}
        />
        {/* <Stack.Screen
            name = {"Account_analy_screen"}
            component = {AddressScreen}
            options = {{
            //headerShown : false ,
            title: "Account",
            headerBackTitleVisible: false,
        }}
        /> */}
         {/* <Stack.Screen
            name = {"Order_and_payment"}
            component = {Order_and_payment}
            options = {{
            headerShown : false ,
            title: "Account",
            headerBackTitleVisible: false,
        }}
        /> */}
        </Stack.Navigator>
    )
}
export default Account_navigator;