import React from 'react';
import { View, Text , Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Join_our_team = (props) => {
  return (
    <ScrollView style={{ top : 10,height : '100%' , width: '100%'}}>

      <Image
      style = {{height : 300 , width : '100%'}}
      source={require('../.././../../assets/glaizer_images/poster/glaizer_office.png')}>
      </Image>


      <View style = {{height : 65 , width : '95%' , marginTop : '3%' , marginHorizontal : '4%'}} >
          <Text style = {{fontSize : 14}}> 
          Glaizer, a trailblazing water purifier company, is on a mission to redefine water quality for communities' health and happiness.

  </Text>
      </View>

      <View style = {{height : 60 , width : '95%' , marginHorizontal : '4%' }} >
          <Text style = {{fontSize : 14}}> 

          Our journey is marked by extensive research and development, leveraging cutting-edge technology and innovation.                              
         

      </Text>
      </View>

      <View style = {{height : 140 , width : '95%', marginHorizontal : '4%'  }} >
          <Text style = {{fontSize : 14}}> 

          Committed to delivering the purest water, our R&D team has set industry benchmarks by meticulously calibrating purifiers to achieve optimal Total Dissolved Solids (TDS) levels. We prioritize maintaining ideal pH levels, preserving essential vitamins, and integrating crucial supplements for water that not only quenches thirst but promotes holistic health.                             
         

</Text>
      </View>

      <View style = {{flexDirection : 'row'}}>
      <Image
      style = {{height : 150 , width : '40%' , marginHorizontal : 5}}
      source={require('../.././../../assets/glaizer_images/poster/water_community.png')}>
      </Image>

      
      
      <View style = {{flexDirection : 'column' , width : '50%' , margin : '5%'}}>
      <Text style = {{fontSize : 15 , fontWeight : '700', color : '#133bcf'}}>
      Glaizer's mission:
      </Text>
      <Text style = {{marginVertical : '3%'}}>
      Pure water, a global necessity. We're dedicated to innovating water accessibility for all. Beyond luxury, it's a fundamental right. Join us in revolutionizing water quality worldwide. At Glaizer, pure water is a universal commitment.
      </Text>
        

      </View>
      </View>

      <Image
      style = {{height : 300 , width : '100%'}}
      source={require('../.././../../assets/glaizer_images/poster/glaizer_office.png')}>
      </Image>

      <Text style = {{fontSize : 15 , fontWeight : '700', color : '#133bcf'}}>
      Glaizer's Community:
      </Text>

      <View style = {{height : 100 , width : '95%' , marginTop : '3%' , margin : '4%'}} >
          <Text style = {{fontSize : 14}}> 
          
          Join our community and be a catalyst for positive change. Together, let's transform the world into a better, more sustainable place—one where every drop of water serves a purpose. Your involvement matters; join us in making a lasting impact on water accessibility and quality, shaping a brighter future for all.

  </Text>
      </View>

     

      


    </ScrollView>
  );
};

export default Join_our_team;
