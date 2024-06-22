import React from 'react';
import {View , Text , Pressable, useWindowDimensions} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import { SafeAreaView } from 'react-native-safe-area-context';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
//import Customer_care from '../../../src/components/Account_detailed/Customer_care';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
//import Login_screen from '../Login_screen';
import Terms_conditions from '../Account_full/Terms_conditions';


const Account_profile = () => {
    const navigation =useNavigation();
    const dimension = useWindowDimensions().width;

    
    const Customer_content = () =>
    {
          navigation.navigate('customer care');
    }
    const sign_out = () => {
      navigation.navigate(logout_item);
    }
    const Terms_conditions = () =>{
          navigation.navigate('Terms_conditions');
    }
    const Return_and_refund = () => {
         navigation.navigate('Return_and_refund');
    }
    const join_our_team = () => {
         navigation.navigate('join_our_team');
    }
    const Account_analy = () => {
      navigation.navigate('Account_analy_screen');
    }
    const Order_and_payment = () => {
      navigation.navigate('Order_and_payment');
    }

   
   

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Pressable onPress = {Account_analy}
        style={{ flex: 0.3, backgroundColor: '#c9f0f2', flexDirection: 'row' }}>
          <View style ={{height : '100%' , width : '35%' , alignItems : 'center' , justifyContent : 'center'}}>
          <View style={{ height : '50%' , width : '55%',backgroundColor: '#000', borderRadius: 90,
          alignItems : 'center' , justifyContent : 'center'}}>
            <Text style={{ fontSize: 50, color: '#fff',alignSelf : 'center',alignItems : 'center'}} numberOfLines={2}>
              R
            </Text>
          </View>
          </View>

          <View style={{ flex: 3, backgroundColor: '#000', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 16, marginLeft: '4%' }}>
              Rahulreddyliveon@gmail.com
            </Text>
          </View>
        </Pressable>
  
        <ScrollView style={{ flex: 7 , backgroundColor : '#e6e9ed'  }}>
          <View style={{ backgroundColor: '#d5d9db', width : '100%' , justifyContent: 'space-around', alignItems: 'flex-start' }}>
            <Pressable onPress={Customer_content} 
            style={{ flex: 1,width : '100%' ,  backgroundColor: '#fff', borderColor: '#c9f0f2' , borderTopWidth : 1 }}>
              <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: '4%' }}>
                <Text>Contact Us</Text>
                <EvilIcons name="arrow-right" size={30} style={{ marginVertical: '5%' }} />
              </View>
            </Pressable>
  
            <Pressable onPress = {Order_and_payment}
             style={{ flex: 1,width : '100%' , backgroundColor: '#fff', borderBottomColor: '#c9f0f2' , borderTopWidth : 1 ,borderColor: '#c9f0f2'  }}>
              <View style={{ alignItems: 'center',  justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: '4%' }}>
                <Text>Order and Payments</Text>
                <EvilIcons name="arrow-right" size={30} style={{ marginVertical: '5%' }} />
              </View>
            </Pressable>
  

            {/* <Pressable style={{ flex: 1,width : '100%' , backgroundColor: 'white' ,  borderTopWidth : 1 ,borderColor: '#c9f0f2'   }}>
              <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: '4%'  }}>
                <Text>Payments</Text>
                <EvilIcons name="arrow-right" size={30} style={{ marginVertical: '5%' }} />
              </View>
            </Pressable> */}
  
            <Pressable onPress={Terms_conditions} 
            style={{ flex: 1,width : '100%' , backgroundColor: 'white' ,   borderTopWidth : 1 , borderColor: '#c9f0f2'  }}>
              <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: '4%' }}>
                <Text>Terms and Conditions</Text>
                <EvilIcons name="arrow-right" size={30} style={{ marginVertical: '5%' }} />
              </View>
            </Pressable>
  
            <Pressable onPress={Return_and_refund}
             style={{ flex: 1,width : '100%' , backgroundColor: 'white' ,  borderTopWidth : 1 ,borderColor: '#c9f0f2'   }}>
              <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: '4%' }}>
                <Text>Return and Refund Policy</Text>
                <EvilIcons name="arrow-right" size={30} style={{ marginVertical: '5%' }} />
              </View>
            </Pressable>
  
            <Pressable onPress={join_our_team} style={{ flex: 1,width : '100%' ,  backgroundColor: 'white' ,  borderTopWidth : 1 ,borderColor: '#c9f0f2'   }}>
              <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: '4%' }}>
                <Text>Join our team</Text>
                <EvilIcons name="arrow-right" size={30} style={{ marginVertical: '5%' }} />
              </View>
            </Pressable>
          </View>
        </ScrollView>
  
        <Pressable style={{ flex: 0.1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }} onPress={sign_out}>
          <Text style={{ fontSize: 18, fontWeight: '700' }}>Sign Out</Text>
        </Pressable>
  
        <View style={{ alignItems: 'center' }}>
          <Text style={{ bottom: 2 }}>Version : 1.0.0</Text>
        </View>
      </SafeAreaView>
    );
  };
  
  export default Account_profile;