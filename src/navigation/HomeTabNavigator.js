import {React} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Main_screen from '../Screens/Main_screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Account_profile from '../Screens/Account_profile';
import HomeScreen from '../Screens/Home';
import Explore_store_navigator from './explore_store_navigator';
import Account_navigator from './Account_navigator';
import ShoopingCartScreen from '../Screens/ShoopingCartScreen';
import Explore_cart_navigator from './Explore_cart_navigator';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#1cb5ba',
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Explore') {
              return <Fontisto name="search" size={25} color={color} />;
            } else if (route.name === 'Store') {
              return <MaterialIcons name="storefront" size={30} color={color} />;
            } else if (route.name === 'Account') {
              return <EvilIcons name="user" size={40} color={color} />;
            } else if (route.name === 'Wishlist') {
              return <Feather name="heart" size={25} color={color} />;
            } else if (route.name === 'Cart') {
              return <Feather name="shopping-cart" size={25} color={color} />;
            }
          },
        })}
      >
       
          {/* <Tab.Screen
            name={'Analytics'}
            component={Main_screen}
            options={{
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home-analytics" size={30} color={color} />
              ),
            }}
          /> */}
          {/* <Tab.Screen
            name={'Store'}
            component={Explore_store_navigator}
            options={{
                headerShown : false,
                tabBarIcon: ({color}) => (
                <MaterialIcons name="storefront" size={30} color={color} />
              ),
            }}
          /> */}
           <Tab.Screen
            name={'Account'}
            component={Account_navigator}
            options={{
                headerShown : false,
              tabBarIcon: ({color}) => (
                <EvilIcons name="user" size={40} color={color} />
              ),
            }}
          />
           
           <Tab.Screen
            name={'Analytics'}
            component={Account_navigator}
            options={{
                headerShown : false,
              tabBarIcon: ({color}) => (
                <EvilIcons name="user" size={40} color={color} />
              ),
            }}
          />


          {/* <Tab.Screen
            name={'cart'}
            component={Explore_cart_navigator}
            options={{
                headerShown : false,
              tabBarIcon: ({color}) => (
                <EvilIcons name="user" size={40} color={color} />
              ),
            }}
          /> */}
         
        
         
          
         
        </Tab.Navigator>
      );
};

export default HomeTabNavigator;