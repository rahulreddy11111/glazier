import React, { useEffect, useState } from 'react';
import { View, Text , Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { DataStore } from 'aws-amplify'; // Assuming you're using AWS Amplify
import { Product } from '../../models';



const Order_and_payment = () => {
  const [productService, setProductService] = useState<Product[]>([]);
  
  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const productItems = await DataStore.query(Product);
      setProductService(productItems);
    } catch (error) {
      console.warn('Error fetching the product', error);
    }
  };
    return(
            <ScrollView style = {{flex:1}}>
                <View style = {{height : 100 , width : '100%' , backgroundColor : 'grey' , flexDirection : 'row'}}>
                     <View style = {{flex : 3 , backgroundColor : 'red'}}>
                  <Image source = {require('../../../assets/glaizer_images/logo/service_logo.jpeg')}
                  style = {{height : '100%' , width : '100%' , borderColor : '#c9f0f2' , borderWidth : 2}}
                  />
                     </View>

                     <View style = {{flex : 8 , backgroundColor : 'grey' , flexDirection : 'column'}}>
                       <Text style = {{flex : 2 , fontSize : 16 ,padding : 5 , fontWeight : '600'}}>
                           Glazier Service 
                       </Text>
                       <Text style = {{flex : 4 , fontSize : 16 , fontWeight : '600'}}>
                           Glazier Service 
                       </Text>
                       <Text style = {{flex : 2 , fontSize : 16 , fontWeight : '600'}}>
                           Glazier Service 
                       </Text>
                     </View>
                </View >
            </ScrollView>
    )
}
export default Order_and_payment;