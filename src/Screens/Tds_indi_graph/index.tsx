import 'core-js/full/symbol/async-iterator';
import React, { useEffect, useState } from 'react';
import {View , Text, ImageBackground , Image, StyleSheet} from 'react-native';
import { DataStore } from 'aws-amplify';
import { TouchableOpacity } from 'react-native';
import GraphWater from '../Graph_water';
import { Product } from '../../models';
//import styles from './styles';
//import { StyleSheet } from "react-native"


const  Frame_col = '#fff';
const Tds_indi_graph = () => {

  
  const [products, setProducts] = useState([]);
  const [monthlyData, setMonthlyData] = useState<number[]>([]);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('Daily'); // Default to Monthly
  const [count, setCount] = useState(3);
  const [frameCol, setFrameCol] = useState('#1cb5ba');



  const fetchDataByTimeFrame = async (newCount) => {

    try {
      const products = await DataStore.query(Product);
      setProducts(products);
    
  
      let newTimeFrame = 'Daily'; // Default value
  
      if (count === 1) {
        // Perform data calculations for Monthly view and set monthlyData
        const latestData = products.slice(-120);
        const updatedMonthlyData: number[] = [];
  
        for (let i = 0; i < 120; i += 20) {
          const monthlyValues = latestData.slice(i, i + 20);
          const monthlyTotal = monthlyValues.reduce(
            (sum, item) => sum + item.tds_registered,
            0
          );
          updatedMonthlyData.push(monthlyTotal / 20);
        }
        setFrameCol('#000');
        setMonthlyData(updatedMonthlyData);
        newTimeFrame = 'Monthly';
         
      } else if (count === 2) {
        // Assuming you want to use the monthly data for weekly as well
        const latestData = products.slice(-56);
  
        // Group the latest data into 7 values per week
        const weeklyData = [];
        for (let i = 0; i < 4; i++) {
          const startIndex = i * 7;
          const endIndex = startIndex + 7;
          const weeklyValues = latestData.slice(startIndex, endIndex);
          const weeklyTotal = weeklyValues.reduce(
            (sum, item) => sum + item.tds_registered,
            0
          );
          weeklyData.push(weeklyTotal / 7); // Average of 7 days
        }
        setFrameCol('#fff');
        setMonthlyData(weeklyData); // Set monthlyData for weekly view
        newTimeFrame = 'Weekly';
      } else if (count === 3) {
        // Assume data is an array of objects with a 'water_quantity' property
  
        // Take the 24 latest values of water_quantity
        const latestData = products.slice(-24);
  
        // Divide each value by 3
        const dividedData = latestData.map((item) => ({
          water_quantity: item.tds_registered / 3,
          tds_registered: item.tds_registered,
          
        }));
  
        // Group the divided data into 3 values for each day for 7 days
        const dailyData = [];
        for (let i = 0; i < 7; i++) {
          const startIndex = i * 3;
          const endIndex = startIndex + 3;
          const dailyValues = dividedData.slice(startIndex, endIndex);
          const dailyTotal = dailyValues.reduce(
            (sum, item) => sum + item.water_quantity,
            0
          );
          dailyData.push(dailyTotal);
        }
        setFrameCol((prevFrameCol) => (prevFrameCol === '#1cb5ba' ? '#107275' : '#1cb5ba'));
        setMonthlyData(dailyData); // Set monthlyData for daily view
        newTimeFrame = 'Daily';
        setFrameCol('#fff');

        
      }
  
      setSelectedTimeFrame(newTimeFrame); // Set the selected time frame
      setCount(newCount);
      

    } catch (error) {
      console.warn('Error fetching data', error);
    }
  };

    return (
        <View style={{ height: '98%',width : '100%' , flexDirection: 'column',
        backgroundColor: '#1cb5ba' , borderRadius : 30 ,marginHorizontal : '1%' , marginVertical : '2%' 
        , borderWidth : 8 , borderBottomLeftRadius: 20, borderBottomRightRadius: 20 , borderColor : '#1cb5ba'   }}>
         
         <View
            style={{
              flex : 1,
              //height : '30%',
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              //borderRadius: 15,
              //borderColor: 'grey',
              //borderWidth: 1,
            }}
          >
            <TouchableOpacity onPress={() => fetchDataByTimeFrame(3)} style={[styles.time_frame , { backgroundColor: count === 3 ? '#19a1a6' : '#1cb5ba'  } ]}>
              <Text style = {{color : '#fff' , fontWeight : '700'}}> DLY </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => fetchDataByTimeFrame(2)} style={[styles.time_frame , { backgroundColor: count === 2 ? '#19a1a6' : '#1cb5ba' }]}>
              <Text style = {{color : '#fff' , fontWeight : '700'}}> WLY </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => fetchDataByTimeFrame(1)} style={[styles.time_frame , { backgroundColor: count === 1 ? '#19a1a6' : '#1cb5ba'  }]}>
              <Text style = {{color : '#fff' , fontWeight : '700'}}> MLY </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex : 5,width: '100%', backgroundColor: '#1cb5ba' }}>
            {/* <Search_resultscreen/> */}
            <GraphWater monthlyData={monthlyData} selectedTimeFrame={selectedTimeFrame} />
          </View>

        
       </View>
    );
}

const styles = StyleSheet.create({
    time_frame: {
      height: '90%',
      width: '30%',
      //backgroundColor: Frame_col ? '#1cb5ba': '#a0e8eb' ,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius : 20,
      borderWidth : 0.2,
      borderColor : '#fff'
    },
});

export default Tds_indi_graph;