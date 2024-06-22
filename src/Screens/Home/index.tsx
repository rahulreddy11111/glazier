import React, { useState , useEffect } from 'react';
import {View, ImageBackground, Image ,Text, TextInput, Pressable, SafeAreaView} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
//import {useNavigation} from '@react-navigation/native';
//import SearchResults from '../SearchResults';
//import ImageCarousel from '../../components/ImageCarousel';
//import product from '../../data/product';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { DataStore } from 'aws-amplify';
import { Productitems } from '../../models';
import ProductItem from '../../components/ProductItem';



const HomeScreen = (props) => {
  const [products, setProducts] = useState<Productitems[]>([]);
  const [searchValue, setSearchValue] = useState('');
  const navigation = useNavigation();
  const [ph_indicator , setph_indicator] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const products = await DataStore.query(Productitems);
      setProducts(products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(searchValue.toLowerCase())
);   

const displayProducts = searchValue ? filteredProducts : products;

  return (
    <SafeAreaView style = {{backgroundColor : '#c9f0f2' , flex : 2}} >
        <View style = {{ height : '15%' , width : '100%' }}>
           <View style={[styles.searchButton, {borderRadius: 20}]}>
           <TextInput
          style={styles.searchInput2}
          placeholder= "Search the best Branded & more ..."
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
               {/* <Fontisto name="search" size={25} color={'#e88079'} margin = {10} />
             <Text style={styles.searchButtonText}>Search by product & more...</Text> */}
           </View>
      </View>

      <View style = {{marginHorizontal : '4%', justifyContent : 'center' ,  height : 90, width : '100%' , backgroundColor : 'grey' , flexDirection : 'row' }}>
      
    <Image
      source={require('../../../assets/glaizer_images/poster/best_price.png')}
      style={{height: 90, width: '19%', backgroundColor: 'white' , resizeMode :'contain' }}
      >

      </Image>
      
  <ImageBackground 
    source={require('../../../assets/glaizer_images/poster/christmas_theme.jpg')}
    style={{ height: 90, width: '90%' ,  backgroundColor : '#c9f0f2'   }}
  >
    <Text style = {{fontWeight : 'bold', width: '90%'  , fontSize : 30 , color : '#fff' }}>
    Taste the purity
    </Text>

    <Text style = {{fontWeight : 'bold', width: '90%'  , fontSize : 20 , color : '#f0dadd' }}>
        Purity is not an luxury its an nessicity 
    </Text>

  </ImageBackground>
  </View>

    <ScrollView style = {{ marginTop : '1%' ,height : 100,width : '100%' , backgroundColor : '#c9f0f2'  }}>

    <FlatList
        data={displayProducts}
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            //style={{ width: itemWidth }}
            //cartProduct={cartProduct}
            //onPress={() => addToCart(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        //numColumns={1}
        
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
  

    

    {/* <View style = {{height : 50 , weight : '100%' , backgroundColor : '#fff' 
    , borderWidth : 1 , alignItems : 'center' , justifyContent : 'center' , borderRadius : 10 }}>
    <Text style = {{fontSize : 18}}>
        10% Discount on all pre payment
    </Text>
  </View> */}
  




   </ScrollView>
   </SafeAreaView>
  
   
    
  );
};

export default HomeScreen;