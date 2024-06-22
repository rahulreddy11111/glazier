// import 'core-js/full/symbol/async-iterator';
// import React, { useEffect, useState } from 'react';
// import {View , Text, ImageBackground , Image, StyleSheet} from 'react-native';
// //import { ScrollView } from 'react-native-gesture-handler';
// //import SearchResultsTab from '../../navigation/SearchResultsTab';
// import Search_resultscreen from '../../navigation/Search_resultscreen';
// import GraphWater from '../Graph_water';
// import { Switch } from 'react-native';
// import { Product } from '../../models';
// import { DataStore } from 'aws-amplify';
// import { TouchableOpacity } from 'react-native';
// import { useNavigation , useRoute } from '@react-navigation/native';
// //import { LineChart, ProgressCircle } from "react-native-svg-charts";
// import { Svg, Circle } from 'react-native-svg';
// import { LineChart } from "react-native-chart-kit"; 
// //import { Text as SVGText } from "react-native-svg";
// import ProgressCircle from 'react-native-progress-circle';
// import SearchResultsTabNavigator from '../../navigation/material_tab_nav';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Fontisto from 'react-native-vector-icons/Fontisto';


// const Main_screen = () => {
  
//   const route = useRoute();
//   const [products, setProducts] = useState([]);
//   const [monthlyData, setMonthlyData] = useState<number[]>([]);
//   const [dailyTotal, setDailyTotal] = useState<number[]>([]);
//   const [selectedTimeFrame, setSelectedTimeFrame] = useState('Daily'); // Default to Monthly
//   const [count, setCount] = useState(3);
//   const [Previ_data , Set_prev_data] = useState(0);

//   const imagePaths = {
//     1 : '/Users/rahul/Glaizer/assets/glaizer_images/faces/sad_face.jpeg',
//     2 : '/Users/rahul/Glaizer/assets/glaizer_images/faces/happy_face.jpeg',
//     3 : '/Users/rahul/Glaizer/assets/glaizer_images/faces/satisfied_face.jpeg',
//   };

  
//   let imagePath;
// //  console.warn(monthlyData[5]);
// if (monthlyData[5] > 10) 
// {
//   imagePath = imagePaths[2]; // Load image 1
  
// } else if (monthlyData[5] == 10) {
//   imagePath = imagePaths[3]; // Load image 2
// } else {
//   imagePath = imagePaths[1]; // Load image 3
// }

// useEffect(() => {
//   const fetchAndSetDailyTotal = async () => {
//     try {
//       const dailyTotalData = await fetchDataByTimeFrame(1);
//       setDailyTotal(dailyTotalData);
//       //console.error('setting daily total',dailyTotalData);
//     } catch (error) { 
//       // Handle error appropriately
//       console.error('Error setting daily total', error);
//     }
//   };

//   fetchAndSetDailyTotal();
// }, [count]);

//   // const imagePaths = {
//   //   1: '/Users/rahul/Glaizer/assets/glaizer_images/faces/sad_face.jpeg',
//   //   2: '/Users/rahul/Glaizer/assets/glaizer_images/faces/happy_face.jpeg',
//   // };
  
//   // const defaultImagePath = '/Users/rahul/Glaizer/assets/glaizer_images/faces/satisfied_face.jpeg';
  
//   // const imagePath = imagePaths[4] || defaultImagePath;

//   // useEffect(() => {
//   //   fetchDataByTimeFrame(count);
//   // }, [count]);
 

  
//  const fetchDataByTimeFrame = async (newCount) => {
//   try {
//     const products = await DataStore.query(Product, (p) => p.user_sub('eq', route.params.user_sub));
//     setProducts(products);
  

//     let newTimeFrame = 'Daily'; // Default value

//     if (count === 3) {
//       // Perform data calculations for Monthly view and set monthlyData
//       const latestData = products.slice(-120);
//       const updatedMonthlyData: number[] = [];

//       for (let i = 0; i < 120; i += 20) {
//         const monthlyValues = latestData.slice(i, i + 20);
//         const monthlyTotal = monthlyValues.reduce(
//           (sum, item) => sum + item.water_quantity,
//           0
//         );
//         updatedMonthlyData.push(monthlyTotal / 20);
//       }

//       setMonthlyData(updatedMonthlyData);
//       newTimeFrame = 'Monthly';
//     } else if (count === 2) {
//       // Assuming you want to use the monthly data for weekly as well
//       const latestData = products.slice(-56);

//       // Group the latest data into 7 values per week
//       const weeklyData = [];
//       for (let i = 0; i < 4; i++) {
//         const startIndex = i * 7;
//         const endIndex = startIndex + 7;
//         const weeklyValues = latestData.slice(startIndex, endIndex);
//         const weeklyTotal = weeklyValues.reduce(
//           (sum, item) => sum + item.water_quantity,
//           0
//         );
//         weeklyData.push(weeklyTotal / 7); // Average of 7 days
//       }

//       setMonthlyData(weeklyData); // Set monthlyData for weekly view
//       newTimeFrame = 'Weekly';
//     } else if (count === 1) {
//       // Assume data is an array of objects with a 'water_quantity' property

//       // Take the 24 latest values of water_quantity
//       const latestData = products.slice(-24);

//       // Divide each value by 3
//       const dividedData = latestData.map((item) => ({
//         water_quantity: item.water_quantity / 3,
//         tds_registered: item.tds_registered,
//       }));

//       // Group the divided data into 3 values for each day for 7 days
//       const dailyData = [];
//       for (let i = 0; i < 7; i++) {
//         const startIndex = i * 3;
//         const endIndex = startIndex + 3;
//         const dailyValues = dividedData.slice(startIndex, endIndex);
//         const dailyTotal = dailyValues.reduce(
//           (sum, item) => sum + item.water_quantity,
//           0
//         );
//         dailyData.push(dailyTotal);
//       }
//       console.warn(dailyData[6]);
//       Set_prev_data(dailyData[0]);
//       setMonthlyData(dailyData); // Set monthlyData for daily view
//       newTimeFrame = 'Daily';
//     }
    
//     setSelectedTimeFrame(newTimeFrame); // Set the selected time frame
//     setCount(newCount);
//   } catch (error) {
//     console.warn('Error fetching data', error);
//   }
// };


//   // useEffect(() => {
//   //   fetchDataByTimeFrame();
//   // }, [count]);



//   // const data = monthlyData.map((value, index) => ({
//   //   // value,
//   //   // label: labels[index],
//   // }));
//   // const circleRadius = 50; // You can adjust the radius as needed

//   // const sum = monthlyData.reduce((sum, value) => sum + value, 0);
//   // const count_num = monthlyData.length;
//   // const averageValue = (sum / count_num).toFixed(2); // Adjust the number of decimal places as needed
  

//   // const ProgressChart = ({ progress }) => {
//   //   const radius = 80;
//   //   const circumference = 2 * Math.PI * radius;
//   //   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   const CustomProgressCircle1 = ({ percent, radius, color, bgColor, borderWidth, start_ang, customIcon, text, inner_width, daily_Total }) => {
//     const circumference = 2 * Math.PI * radius;
//     const strokeDashoffset = circumference - (percent / 100) * circumference;
//     const startAngle = start_ang; // Adjusted to start from 270-degree angle
  
//     // Calculate the radius for the inner dotted circle
//     const innerRadius = radius - borderWidth - 10;
  
//     // Calculate the length of the inner circle
//     const innerCircumference = 2 * Math.PI * innerRadius;
  
//     // Number of dots in the inner circle
//     const numDots = 20;
  
//     // Calculate the distance between each dot
//     const dotSpacing = innerCircumference / numDots;
  
//     // Update startAngle2 to start from 225 degrees
//     const startAngle2 = 220;
  
//     // Update strokeDashoffset2 to cover the desired range (225 to 315 degrees)
//     const strokeDashoffset2 = ((percent / 100) * (315 - 225) * (2 * Math.PI * innerRadius) / 360);
  
//     return (
//       <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%', width: '60%' }}>
//         <Svg height={radius * 2 + borderWidth * 2} width={radius * 2 + borderWidth * 2}>
//           {/* Outer Circle */}
//           <Circle
//             cx={radius + borderWidth}
//             cy={radius + borderWidth}
//             r={radius - borderWidth / 2}
//             stroke={color}
//             strokeWidth={borderWidth}
//             fill={bgColor}
//             strokeDasharray={`${circumference} ${circumference}`}
//             strokeDashoffset={strokeDashoffset + 20}
//             strokeLinecap= "round"
//             transform={`rotate(${startAngle} ${radius + borderWidth} ${radius + borderWidth})`}
//           />
  
//           {/* Inner Dotted Circle */}
//           <Circle
//   cx={radius + borderWidth}
//   cy={radius + borderWidth}
//   r={innerRadius}
//   fill="transparent"
//   stroke={color}
//   strokeWidth={4}  // Adjust the stroke width as needed
//   strokeDasharray={`${dotSpacing / 8} ${dotSpacing }`}  // Equal values to create circular dots
//   strokeDashoffset={strokeDashoffset2}
//   transform={`rotate(${startAngle2} ${radius + borderWidth} ${radius + borderWidth})`}  // Adjust the rotation
// />

//         </Svg>
  
//         <View style={{ height: '45%', width: inner_width, alignItems: 'center'
//         , justifyContent: 'center', position: 'absolute', backgroundColor: '#fff' }}>
//           {customIcon}
//           <Text style={{ color: '#000', fontWeight: '600' }}>{Previ_data.toFixed(3)}</Text>
//           <Text style={{ fontSize: 12 }}>{text}</Text>
          

         
//         </View>
//       </View>
//     );
//   };
  
    
//   const CustomProgressCircle = ({ percent, radius, color, bgColor, borderWidth , start_ang ,  customIcon , text ,inner_width , daily_Total }) => {
//     const circumference = 2 * Math.PI * radius;
//     const strokeDashoffset = circumference - (percent / 100) * circumference;
//     const startAngle = start_ang; // Adjusted to start from 270-degree angle

//     //console.warn(daily_Total);
 
//     return (
//       <View style={{ alignItems: 'center', justifyContent: 'center' , height : '80%' , width : '30%' , backgroundColor : '#fff' }}>
//         <Svg height={radius * 2 + borderWidth * 2} width={radius * 2 + borderWidth * 2}>
//           <Circle
//             cx={radius + borderWidth}
//             cy={radius + borderWidth}
//             r={radius - borderWidth / 2}
//             stroke={color}
//             strokeWidth={borderWidth}
//             fill={bgColor}
//             strokeDasharray={`${circumference} ${circumference}`}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//             transform={`rotate(${startAngle} ${radius + borderWidth} ${radius + borderWidth})`}
//           />
//         </Svg>
//         <View style={{height : '80%',width : inner_width, alignItems : 'center'
//         ,justifyContent : 'flex-start',position : 'absolute', backgroundColor : '#fff'}}>
//       {customIcon}
//     <Text style = {{fontWeight :  '600' , fontSize : 10}}>{text}</Text>
//       {/* <Text style = {{color : '#fff'}}>{Previ_data}</Text> */}
//         </View>
//       </View>
//     );
//   };

 

//     return (
//       <View style={{ width: '100%', height: '100%', borderWidth: 3, borderColor: '#fff' , backgroundColor : '#fff' }}>
//         <View style={{ height: '60%', flex: 2, backgroundColor: '#fff' }}>
//           <View
//             style={{
//               height: '100%',
//               width: '100%',
//               alignItems: 'center',
//               justifyContent: 'flex-end',
//             }}
//           >
//             <Text style={{ color: '#000', fontSize: 24, fontWeight: '600' }}>Everyone deserves </Text>
//             <Text style={{ color: '#000', fontSize: 24, fontWeight: '600' }}>purity </Text>
//           </View>
//         </View>

//         {/* <Svg height="200" width="200">
//             <Circle cx="100" cy="100" r={radius} stroke="#e0e0e0" strokeWidth="10" fill="transparent" />
//             <Circle
//               cx="100"
//               cy="100"
//               r={radius}
//               stroke="green"
//               strokeWidth="10"
//               fill="transparent"
//               strokeDasharray={`${circumference} ${circumference}`}
//               strokeDashoffset={strokeDashoffset}
//             />
//           </Svg> */}

//         <View
//           style={{
//             height : '80%',
//             flex: 6,
//             backgroundColor: '#fff',
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}
//         >
          

//           <CustomProgressCircle1 percent={63} 
//           radius={90} 
//           color="#1cb5ba"
//            bgColor="#fff" 
//            borderWidth={10} 
//            start_ang = {-210}
           
//            customIcon={<FontAwesome5 name="glass-whiskey" size={35} color="#000" />}
//            text="Liters"
//            inner_width = '40%'
//            daily_Total = {monthlyData[6]}
//            />

         

//         </View>

//         <View style={{ height: '100%',width : '100%', flex: 2, backgroundColor: '#fff' 
//         , flexDirection : 'row' , justifyContent : 'space-around' }}>
//         <CustomProgressCircle
//          percent={80} 
//          radius={40} 
//          color="#1cb5ba" 
//          bgColor="#fff" 
//          borderWidth={6} 
//          start_ang = {-90}
//          customIcon= {<MaterialCommunityIcons name="water-sync" size={35} color="#82439c" />}
//          text = "RO"
//          inner_width = '35%'
//          daily_Total = {monthlyData[5]}
//          />
//          <View style={{ height: '10%'}}>
//     <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}></Text>
//   </View>
         
//         <CustomProgressCircle percent={60} radius={40} color= "#1cb5ba" bgColor="#fff" borderWidth={6} start_ang = {-90}
//         customIcon= {<Fontisto name="thermometer-alt" size={35} color="#82439c"  />}
//         text = "PH"
//         inner_width = '35%'
//         daily_Total = {monthlyData[5]}
//         />

// <View style={{ height: '10%' }}>
//     <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}></Text>
//   </View>

//         <CustomProgressCircle percent={70} radius={40} color="#24d0d6" bgColor="#fff" borderWidth={6} start_ang = {-90}
//         customIcon= {<FontAwesome5 name="temperature-low" size={35} color="#82439c" />}

//         inner_width = '35%'
//         text = "Temp"
//         daily_Total = {monthlyData[3]}
//         />
//         <View style={{ height: '10%'}}>
//     <Text style={{ color: '#000', fontSize: 20, fontWeight: '600' }}></Text>
//   </View>
        
       
//         </View>
    
//     <View style = {{flex : 1 , backgroundColor : '#fff' , height : '100%' 
//     , width : '100%' , flexDirection : 'row' , alignItems : 'center' , justifyContent : 'space-around'  }}>
//       <Text style = {{fontWeight : '600'}}>
//         30%
//       </Text >
//       <Text style = {{fontWeight : '600'}}>
//         70%
//       </Text>
//       <Text style = {{fontWeight : '600'}}>
//         80%
//       </Text >

//     </View>
      
        
//         <View style={{ height: '40%',width : '99%' , backgroundColor: '#82439c' }}>
//           <SearchResultsTabNavigator/>
//         </View>

        
//       </View>
//     );
//   };

//   const styles = StyleSheet.create({
//     time_frame: {
//       height: '85%',
//       width: '30%',
//       backgroundColor: '#1cb5ba',
//       alignItems: 'center',
//       justifyContent: 'center',
//       borderRadius : 20,
//       borderWidth : 0.2,
//       borderColor : '#fff'
//     },
//     container: {
//       height: '100%',
//       width: '100%',
//       //marginHorizontal: '1%',
//       borderWidth: 1,
//       borderRadius: 10,
//     },
//   });

// //   return <ProgressChart />;
// // };

// export default Main_screen;