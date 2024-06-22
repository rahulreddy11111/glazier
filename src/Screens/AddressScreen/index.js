// import 'core-js/full/symbol/async-iterator';
// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   ScrollView,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import {Picker} from '@react-native-picker/picker';
// //import {useNavigation, useRoute , RouteProp} from '@react-navigation/native';
// import countryList from 'country-list';
// //import {Auth, DataStore, API, graphqlOperation} from 'aws-amplify';
// //import {useStripe} from '@stripe/stripe-react-native';
// //import {Order, OrderProduct, CartProduct} from '../../models';
// //import {createPaymentIntent} from '../../graphql/mutations';

// import Button from '../../components/Button';
// import styles from './styles';
// import { DataStore, Auth } from 'aws-amplify';
// import { Adminregconsole } from '../../models';

// const countries = countryList.getData();



// const AddressScreen = () => {
//   const [country, setCountry] = useState(countries[104].code);
//   const [fullname, setFullname] = useState('');
//   const [phone, setPhone] = useState('');

//   const [address, setAddress] = useState('');
//   const [addressError, setAddressError] = useState('');

//   const [city, setCity] = useState('');
//   //const [clientSecret, setClientSecret] = useState<string | null>(null); 
//   const [Pin_code , Set_pin_code ] = useState('');
//   const [Unique_id , Set_Unique]  = useState('');
//   const [Password , Set_Password] = useState('');

 

//   const onCheckout = async () => {
//     if (addressError) {
//       Alert.alert('Fix all field errors before submitting');
//       return;
//     }
  
//     if (!fullname) {
//       Alert.alert('Please fill in the fullname field');
//       return;
//     }
  
//     if (!phone) {
//       Alert.alert('Please fill in the phone number field');
//       return;
//     }
  
//     try {
//       const userData = await Auth.currentAuthenticatedUser();
  
//       // Fetch all records from Adminregconsole
//       const adminRecords = await DataStore.query(Adminregconsole);
  
//       // Find the index of the matching record
//       const matchingIndex = adminRecords.findIndex(
//         (adminRecord) => adminRecord.Unique_id === Unique_id && adminRecord.Password === Password
//       );
  
//       if (matchingIndex !== -1) {
//         // Create a new object with updated values
//         const updatedAdminEntry = {
//           ...adminRecords[matchingIndex],
//           user_sub: userData.attributes.sub,
//           Product_status: true,
//         };
  
//         // Update the existing record in DataStore
//         await DataStore.update(
//           Adminregconsole,
//           {
//             Unique_id: Unique_id,
//             Password: Password,
//           },
//           (record) => {
//             record.Product_status = true;
//             record.user_sub = userData.attributes.sub;
//           }
//         );
  
//         // Continue with other logic...
//         // For example, saveOrder();
//         // Alert.alert('Success', 'Your payment is confirmed!');
//       } else {
//         Alert.alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };
  

//   const validateAddress = () => {
//     if (address.length < 3) {
//       setAddressError('Address is too short');
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
//       <ScrollView style={[styles.root  ]}>
//         <View style={styles.row}>
//           <Picker selectedValue={country} onValueChange={setCountry}>
//             {countries.map(country => (
//               <Picker.Item value={country.code} label={country.name} />
//             ))}
//           </Picker>
//         </View>

//         {/* Full name */}
//         <View style={styles.row}>
//           <Text style={styles.label}>Full name (First and Last name)</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Full name"
//             value={fullname}
//             onChangeText={setFullname}
//           />
//         </View> 
 
//         {/* Phone number */}
//         <View style={styles.row}>
//           <Text style={styles.label}>Phone number</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Phone number"
//             value={phone}
//             onChangeText={setPhone}
//             keyboardType={'phone-pad'}
//           />
//         </View>

//         {/* Address */}
//         <View style={styles.row}>
//           <Text style={styles.label}>Address</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Address"
//             value={address}
//             onEndEditing={validateAddress}
//             onChangeText={text => {
//               setAddress(text);
//               setAddressError('');
//             }}
//           />
//           {!!addressError && (
//             <Text style={styles.errorLabel}>{addressError}</Text>
//           )}
//         </View>

//         {/* City */}
//         <View style={styles.row}>
//           <Text style={styles.label}>City</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="City"
//             value={city}
//             onChangeText={setCity}
//           />
//         </View>

//         <View style={styles.row}>
//           <Text style={styles.label}>Pin code</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Pin code"
//             value={Pin_code}
//             onChangeText={Set_pin_code}
//           />
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.label}>Unique id</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Unique id"
//             value={Unique_id}
//             onChangeText={Set_Unique}
//           />
//         </View>
//         <View style={styles.row}>
//           <Text style={styles.label}>Password</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={Password}
//             onChangeText={Set_Password}
//           />
//         </View>

//         <Button text="Connect" onPress={onCheckout} />
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default AddressScreen;
