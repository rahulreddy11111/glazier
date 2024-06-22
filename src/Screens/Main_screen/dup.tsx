import 'core-js/full/symbol/async-iterator';
import React, { useEffect, useState } from 'react';
import {View , Text, ImageBackground , Image, StyleSheet} from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
//import SearchResultsTab from '../../navigation/SearchResultsTab';
import Search_resultscreen from '../../navigation/Search_resultscreen';
import GraphWater from '../Graph_water';
import { Switch } from 'react-native';
import { Product } from '../../models';
import { DataStore } from 'aws-amplify';
import { TouchableOpacity } from 'react-native';
import { useNavigation , useRoute } from '@react-navigation/native';

const Main_screen = () => {
  
  const route = useRoute();
  const [Products, setProducts] = useState([]);
  const [Count , SetCount] = useState(3);
  const [Selectedtimeframe , Setselectedtimeframe] = useState('daily');
 
  
  

  const imagePaths = {
    1: '/Users/rahul/Glaizer/assets/glaizer_images/faces/sad_face.jpeg',
    2: '/Users/rahul/Glaizer/assets/glaizer_images/faces/happy_face.jpeg',
  };
  
  const defaultImagePath = '/Users/rahul/Glaizer/assets/glaizer_images/faces/satisfied_face.jpeg';
  
  const imagePath = imagePaths[4] || defaultImagePath;

  useEffect(() => {
    fetchDataByTimeFrame(count);
  }, [count]);
 
    
 const fetchDataByTimeFrame = async (newCount) => {
     try {
          const Products = await DataStore.query(Product)
          setProducts(Products);

          if(Count === 1)
          {
             const latest_date = Products.slice(-60);
             const 


          }
          Setselectedtimeframe(timeframe);
          SetCount(newCount);
     }catch(error){
        console.warn('fetched wrong',error);
     }



};

  useEffect(() => {
    fetchDataByTimeFrame();
  }, [count]);


return(

<View style = {{width : '100%' , height : '100%', borderWidth : 3 , borderColor : '#fff'  }}>
    <ImageBackground style = {{backgroundColor : '#c9f0f2' , width : '98%' 
    , height : '100%' , margin : '1%' ,borderRadius : 20 }}>
        <ImageBackground source={ require('../../../assets/glaizer_images/istockphoto-1255979864-170667a.jpg')}
        style = {{width : '99%' , height : '60%' , borderRadius : 20 , overflow : 'hidden'  }}>

           <View
    style={{width : '99%' , height : '60%' ,
      
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjust the opacity (0.5 in this case)
    }}
  >
  </View>
  
  <View style = {{height : '21%' , width : '55%' ,bottom : '50%' ,backgroundColor : '#fff'
  , borderRadius : 20 , flexDirection  : 'row' , borderWidth : 1 , borderColor : '#686b69'}}>
     
     <View style = {{height : '100%' , width : '100%' , flexDirection : 'row'}}>
     <Image 

     source = {require('../../../assets/glaizer_images/indications/images-2.png')} 
     style = {{height : '100%' ,width : '50%' , resizeMode : 'cover'  , overflow : 'hidden' , borderRadius : 20}}
     >
    
     </Image>
     <View style  = {{alignItems : 'center' , justifyContent : 'center' , width : '40%' }}>
     <Text style = {{fontWeight : '600' }}>
        Average water consumed
      </Text>
      </View>
  </View>

  <View style = {{height : '100%' , width : '60%' , backgroundColor : '#fff' , left : '30%', 
  borderWidth : 1 , borderRadius : 20 , alignItems : 'center' , borderColor : '#686b69'}}>
  <Image source={{ uri: imagePath }} 
   style = {{resizeMode : 'contain' , height : '80%' , width : '100%'}}
   ></Image>
   <Text  style = {{fontWeight : '500'}}>
    12L/day
   </Text>
  </View>
  </View>


  <View style = {{flexDirection : 'row' , height : '100%' , width: '100%' , justifyContent : 'space-around' }}>

  

  <View style = {{height : '20%' ,width : '25%' ,borderWidth : 2 
  , borderColor : '#686b69' ,bottom : '35%' , borderRadius : 10 , backgroundColor : '#7eede0'}}>
    
    <Image source = {require('../../../assets/glaizer_images/indications/images-3.jpeg')}
    style = {{height : '85%' , width : '80%' , margin : '10%' , borderRadius : 40}} >
    </Image>

</View>

<View style = {{height : '20%' ,width : '25%' ,borderWidth : 2 
  , borderColor : '#686b69' ,bottom : '35%' , borderRadius : 10 ,backgroundColor : '#e8a88b'}}>

<Image source = {require('../../../assets/glaizer_images/indications/tds-image.jpg')}
    style = {{height : '85%' , width : '80%' , margin : '10%' ,  borderRadius : 40}} >
    </Image>

</View>

<View style = {{height : '20%' ,width : '25%' ,borderWidth : 2 
  , borderColor : '#686b69' ,bottom : '35%' , borderRadius : 10 , backgroundColor : '#f24438'}}>

<Image source = {require('../../../assets/glaizer_images/indications/images.jpeg')}
    style = {{height : '85%' , width : '80%' , margin : '10%' , borderRadius : 40}} >
    </Image>

</View>

</View>
        </ImageBackground>

        <View style = {{height : 60 , width : '98%' , bottom : '20%' , flexDirection : 'row' ,alignItems : 'center' , justifyContent : 'space-around' , borderRadius :5 , borderColor :'grey' , borderWidth : 1}} >

          <TouchableOpacity onPress={() => fetchDataByTimeFrame(3)} style = {styles.time_frame}>
             <Text> Daily </Text>
             </TouchableOpacity>
          <TouchableOpacity onPress={() => fetchDataByTimeFrame(2)} style = {styles.time_frame}>
             <Text> Weekly </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => fetchDataByTimeFrame(1)} style = {styles.time_frame}>
             <Text> Monthly </Text>
          </TouchableOpacity>

        </View>



        <View style = {{height : '35%' , width :'98%' ,bottom : '9%', backgroundColor : '#fff'}}>
        {/* <Search_resultscreen/> */}
        <GraphWater monthlyData={monthlyData} selectedTimeFrame={selectedTimeFrame} />

        </View>
        

    </ImageBackground>
</View>

)
}

const styles =  StyleSheet.create({
  time_frame : {
    height : '90%' ,
     width : '32%' ,
      backgroundColor : '#fff' ,
       alignItems : 'center' ,
        justifyContent : 'center' 
  }
})


export default Main_screen;